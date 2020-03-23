const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  admin: {type: Boolean, default: false},
  basic: {
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
  },
  details: {
    dateOfBirth: {type: Date },
    address: {
      street: {type: String },
      city: {type: String },
      zip: {type: Number},
      state: {type: String },
      country: {type: String}
    },
    phone: {type: String }
  },
  settings: {
    notifications: {type: Boolean}
  },
  privacy: {
    GDPR: {type: Boolean},
    acceptedDate: {type: Date},
    ip: {type: String},
    acceptAll: {type: Boolean}
  },
  appStats: {
    lastVisit: {type: Date}
  }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
