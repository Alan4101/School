const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    _stdId: Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        min: 7,
        max: 17
    }
},{
    versionKey: false
});

module.exports = mongoose.model('Student', StudentSchema);