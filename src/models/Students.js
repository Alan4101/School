const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
    nameClass: String,
    studentName:  String
},{
    versionKey: false
});

module.exports = mongoose.model('Students', StudentsSchema);