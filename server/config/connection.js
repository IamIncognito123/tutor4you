// mongoose is a wrapper around MongoDB database
const mongoose = require('mongoose');

// connect allows mongoose to connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:127.0.0.1:27017/tutors', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection