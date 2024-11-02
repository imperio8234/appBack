const mongoose = require('mongoose');

const personaje = new mongoose.Schema({
  datos: { type: mongoose.Schema.Types.Mixed, required: true }
});

const personajes = mongoose.model('personaje', personaje);

module.exports = personajes;