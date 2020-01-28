const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeachingSchema = new Schema({
    teacher: String,
    class_room: String,
    subjectNumber: Number,
    classRoomNumber: Number
},{
    versionKey: false
});

module.exports = mongoose.model('Teaching', TeachingSchema);