const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    age: Number
},{
    versionKey: false
});

module.exports = mongoose.model('Student', StudentSchema);