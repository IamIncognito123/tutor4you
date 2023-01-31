// bringing in the mongoose schema and model
const { Schema, model} = require ('mongoose');

// 'new' creates an instance of the object 
// instantiate Schema as a new const called studentSchema
const studentSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    }
})

// Models are constructors compiled from Schema definitions, an instance of a model is called a document
// Models are responsible for creating and reading documents from the underlying MongoDB database

// the mongoose model is called on the student schema, to compile a model
const Student = model('Student', studentSchema);

module.exports = Student;