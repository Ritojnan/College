const mongoose = require('mongoose');

const username = 'chrome';
const passwordWithSpecialCharacters = 'stonks@123';
const clusterAddress = 'cluster0.3bghcpe.mongodb.net';
const databaseName = 'wma';
// Percent-encode the password
const encodedPassword = encodeURIComponent(passwordWithSpecialCharacters);
// Construct the MongoDB Atlas connection string
const connectionString = `mongodb+srv://${username}:${encodedPassword}@${clusterAddress}/${databaseName}?retryWrites=true&w=majority`;
console.log(connectionString);
const connectToMongo = ()=>{
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = connectToMongo;


// const mongoose = require('mongoose');

// const mongoURI = "mongodb://127.0.0.1/mesaynger?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// // const mongoURI = "mongodb+srv://ritojnanm:password@cluster0.1w2plwl.mongodb.net/?retryWrites=true&w=majority"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI)
// }

// module.exports = connectToMongo;