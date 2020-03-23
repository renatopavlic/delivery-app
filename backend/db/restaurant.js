const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  basic: {
    name: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
  },
  details: {
    address: {
      street: {type: String },
      city: {type: String },
      zip: {type: Number},
      state: {type: String },
      country: {type: String}
    },
    phone: {type: String }
  },
  appStats: {
    lastVisit: {type: Date}
  }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Restaurant', schema);
