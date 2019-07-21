
const mongoose = require('mongoose');
const db = require('../db/27998DB');

var schema = mongoose.Schema({
    name: String,
    workTime: Number,
    love: String,
    sex: String,
    types: String
})

module.exports = db.model('teachers', schema);