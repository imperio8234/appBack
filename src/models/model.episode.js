const mongoose = require('mongoose');

const episode = new mongoose.Schema({
  datos: { type: mongoose.Schema.Types.Mixed, required: true }
});

const episodes = mongoose.model('episode', episode);

module.exports = episodes;