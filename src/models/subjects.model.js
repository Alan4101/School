const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectsSchema = new Schema({
    name: String,
    theme: String,
    class_room: String,
    subjectNumber: Number
},{
    versionKey: false
});

module.exports = mongoose.model('Subjects', SubjectsSchema);