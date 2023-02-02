const {Schema, model} = require('mongoose');

const classSchema = new Schema ({
    courseName: {
        type: String,
        required: true,
    },

})

const Class = model('Class', classSchema);

module.exports = Class;