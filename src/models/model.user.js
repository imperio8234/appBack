const mongoose = require('mongoose');

const user = new mongoose.Schema({
  nombre:{type:String}
});

const users = mongoose.model('user', user);

module.exports = users;