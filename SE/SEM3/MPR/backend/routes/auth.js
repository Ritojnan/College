const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const bodyParser = require("body-parser");
const client = require("twilio")(
  "AC6d994d5ab13dc6f37c68068bf96353dd",
  "5f6a4c0b6f9c9b9b9b9b9b9b9b9b9b9"
);
const fast2sms=require("fast-two-sms")


//otp generation function 
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
}

const JWT_SECRET = 'SECRET_WMA';



// Endpoint for sending a verification code via SMS
router.post("/sendotp",async (req, res) => {
  const phoneNumber = req.body.phoneNumber; // Replace with your request data
  if (!phoneNumber) {
    return res.status(400).json({ error: 'Phone number is required' });
  }

  
console.log(phoneNumber)

try {
  const otp = generateOTP(); 

  const options = {
    authorization: 'YOUR_API_KEY', // Replace with your Fast2SMS API key
    message: `Your OTP is ${otp}`,
    numbers: [phoneNumber],
  };

  const fast2smsResponse = await fast2sms.sendMessage(options);

  if (fast2smsResponse.status === 'OK') {
    res.json({ success: true, message: 'OTP sent successfully' });
  } else {
    res.status(500).json({ error: 'Failed to send OTP' });
  }
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}


  // client.verify.v2.services("VA5e3d558ca9101e2a758de31fc615a074")
  //   .verifications.create({ to: phoneNumber, channel: "sms" })
  //   .then((verification) => {
  //     console.log(phoneNumber+verification.status);
  //     res.json({ status: verification.status });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     res.status(500).json({ error: "Failed to send verification code" });
  //   });
});

router.post("/verifyotp", (req, res) => {
  const phoneNumber = req.body.phoneNumber; // Replace with your request data
console.log(phoneNumber)
  client.verify.v2.services("YOUR_SERVICE_ID")
    .verifications.create({ to: phoneNumber, channel: "sms" })
    .then((verification) => {
      console.log(phoneNumber+verification.status);
      res.json({ status: verification.status });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to send verification code" });
    });
});


// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post("/createuser", [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
  body('phoneNumber', 'Enter a valid phone number').isMobilePhone(),
], async (req, res) => {
  // If there are validation errors, return Bad request and the errors
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }

  // Extract user registration data from the request
  const {
    name,
    username,
    email,
    password,
    phoneNumber,
    country,
    streetAddress,
    city,
    state,
    zipCode,
    code
  } = req.body;

  // Check whether the user with this email exists already
  try {
    let user = await User.findOne({ phoneNumber });
    if (user) {
      return res.status(400).json({ error: "Sorry, a user with this phone number already exists" });
    }

    // Verify the phone number with Twilio
    const twilioVerification = await client.verify.v2.services("YOUR_SERVICE_ID")
      .verificationChecks.create({ to: phoneNumber, code });
    if (twilioVerification.status === 'approved') {
      // Phone number is verified, proceed with user registration
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);

      // Create a new user
    const   newUser = await User.create({
        name,
      username,
      address: {
        countryRegion:country,
        streetAddress:streetAddress,
        city,
        stateProvince:state,
        zipPostal:zipCode,
      },
        password: secPass,
        email,
        phoneNumber,
      });

      await newUser.save();

      const data = {
        newUser: {
          id: newUser.id
        }
      }

      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({ authtoken });
    } else {
      // Phone number verification failed
      return res.status(400).json({ error: "Phone number verification failed" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    const userid = req.user.id;
    const user = await User.findById(userid).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

router.post('/update',fetchuser, async (req, res) => {
  // If there are validation errors, return Bad request and the errors
  const { _id, updatedData } = req.body;
  const userId=_id;
  try {
    // Check if the user exists by their ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's details
    for (const key in updatedData) {
      console.log("dd")
      if (key !== 'password' && user[key] !== undefined) {
        // Check if the key exists in the user documen
        console.log("dd")

        user[key] = updatedData[key];
      } else {
        console.log(`Skipping field: ${key}`);
      }
    }
    // If you want to update the password separately, use a different route for that
    console.log(user)

    // Save the updated user
    await user.save();

    res.json({ message: 'User details updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router