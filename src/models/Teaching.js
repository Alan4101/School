const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeachingSchema = new Schema({
    teacher: String,
    class_room: String,
    subjectNumber: Number,
    classRoomNumber: {
        type: Number,
        min: 1,
        max: 20
    }
},{
    versionKey: false
});

module.exports = mongoose.model('Teaching', TeachingSchema);