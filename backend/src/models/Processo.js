const mongoose = require('mongoose');

const ProcessoSchema = new mongoose.Schema({
  name: String,
  entry_time: Number,
  duration: Number,
  quantum: Number,
  priority: Number
});

module.exports = mongoose.model('Processo', ProcessoSchema);