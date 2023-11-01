
// Endpoint for checking the verification code
app.post("/check-verification-code", (req, res) => {
  const phoneNumber = req.body.phoneNumber; // Replace with your request data
  const code = req.body.code; // Replace with your request data

  client.verify.v2.services("VA5e3d558ca9101e2a758de31fc615a074")
    .verificationChecks.create({ to: phoneNumber, code: code })
    .then((verification_check) => {
      console.log(phoneNumberS+code+verification_check.status);
      res.json({ status: verification_check.status });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to check verification code" });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
