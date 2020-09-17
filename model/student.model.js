const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    classe: {
        type: String
    },
    dob: {
        type: Date
    },
    classe_id: {
        type : Number
    }
}, {
    collection: 'students'
})

var std = module.exports = mongoose.model('StudentSchema', studentSchema)
