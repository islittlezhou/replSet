
const mongoose = require('mongoose');
const db = require('./dbtest2');

var schema = mongoose.Schema({
    name: String,
    workTime: Number,
    love: String,
    sex: String,
    types: String
})

module.exports = db.model('teachers', schema);