const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeachersSchema = new Schema({
    name: String,
    subject: String,
    teacherNumber: Number
},{
    versionKey: false
});

module.exports = mongoose.model('Teachers', TeachersSchema);