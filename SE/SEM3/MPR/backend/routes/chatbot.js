const express = require('express');
const router = express.Router();
const fs = require('fs');
const csv = require('csv-parser');
const { containerBootstrap } = require('@nlpjs/core');
const { Nlp } = require('@nlpjs/nlp');
const { LangEn } = require('@nlpjs/lang-en-min');

// Initialize the NLP model and container
const nlp = new Nlp();

(async () => {
  const container = await containerBootstrap();
  container.use(Nlp);
  container.use(LangEn);
  nlp.settings.autoSave = false;
  nlp.addLanguage('en');

  await nlp.load('./data/nlp-model.json');

  // Create an array to store CSV data from intent-question.csv
  const data = [];

  // Parse the CSV file and add data to the array
  fs.createReadStream('./data/text-intent.csv')
    .pipe(csv())
    .on('data', (row) => {
      data.push({ text: row.text, intent: row.intent });
    })
    .on('end', async () => {
      // Add documents and intents from the CSV data
      data.forEach((row) => {
        nlp.addDocument('en', row.text, row.intent);
      });

      // Create an array to store CSV data from intent-answer.csv
      const answerData = [];

      // Parse the intent-answer CSV file and add data to the array
      fs.createReadStream('./data/intent-answer.csv')
        .pipe(csv())
        .on('data', (row) => {
          answerData.push({ intent: row.intent, answer: row.answer });
        })
        .on('end', async () => {
          // Add answers for intents from the CSV data
          answerData.forEach((row) => {
            nlp.addAnswer('en', row.intent, row.answer);
          });

                    // Train the NLP model
                    await nlp.train();


                    // fs.writeFile('./data/nlp_model.json', JSON.stringify(nlp), (err) => {
                    //   if (err) {
                    //     console.error(err);
                    //     return;
                    //   }
                    //   console.log('Data written to file');
                    // });
        });
    });
})();

// Create a route to handle user queries
router.post('/ask',async  (req, res) => {
  const query=req.body.query;
  try {
    // Process the user's query

 nlp.process('en', query).then((response) => {
  if(response.intent=="None"){
    res.json("Sorry I am unable to answer that.Can you please try something else?Thank you")
  }
      res.json(response.answer);
    //   res.json(response.intent);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
