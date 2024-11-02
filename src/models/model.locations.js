const mongoose = require('mongoose');

const location = new mongoose.Schema({
  datos: { type: mongoose.Schema.Types.Mixed, required: true }
});

const locations = mongoose.model('location', location);

module.exports = locations;