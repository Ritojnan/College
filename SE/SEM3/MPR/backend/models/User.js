const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
  countryRegion: {
    type: String,
    required: true,
    default:"",

  },
  streetAddress: {
    type: String,
    required: true,
    default:"",

  },
  city: {
    type: String,
    required: true,
    default:"",

  },
  stateProvince: {
    type: String,
    default:"",
    required: true,
  },
  zipPostal: {
    type: String,
    required: true,
    default:"",

  },
});

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastOnlineTime: {
    type: Date,
    default: null,
  },
  phoneNumber: {
    type: String,
    default: null,
    unique: true,
  },
  contactList: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  address: addressSchema, // Include the user's address as a subdocument
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
