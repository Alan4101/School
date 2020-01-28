const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassRoomSchema = new Schema({
    name: String,
    classRoomNumber: Number
},{
    versionKey: false
});

module.exports = mongoose.model('ClassRoom', ClassRoomSchema);