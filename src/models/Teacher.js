const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    full_name: String,
    subject: String,
    teacherNumber: Number
},{
    versionKey: false
});

module.exports = mongoose.model('Teacher', TeacherSchema);