const {Schema, model} = require('mongoose');

const tutorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    major:{
        type: String,
        required: true
    },
    subjects: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    }
})

const Tutor = model('Tutor', tutorSchema);

module.exports = Tutor;


