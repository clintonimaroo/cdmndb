const mongoose = require('mongoose');

const ColumnTypeSchema = new mongoose.Schema({
  name: String,
  dataType: String,
});

module.exports = mongoose.model('ColumnType', ColumnTypeSchema);
