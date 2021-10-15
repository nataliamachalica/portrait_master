const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true, maxLength: 25 },
  author: { type: String, required: true, maxLength: 30 },
  email: { type: String, required: true },
  src: { type: String, required: true },
  votes: { type: Number, required: true },
});

module.exports = mongoose.model('Photo', photoSchema);
