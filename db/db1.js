
const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    age: Number,
    love: String,
    sex: String,
    count: Number
})

module.exports = mongoose.model('students', schema);