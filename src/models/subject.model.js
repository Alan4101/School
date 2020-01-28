const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name: String,
    class_room: String,
    subjectNumber: Number,
    timeStart: Date,
    timeEnd: Date
},{
    versionKey: false
});

module.exports = mongoose.model('Subject', SubjectSchema);