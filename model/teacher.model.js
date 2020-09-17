const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let TeacherSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    adresse: {
        type : String
    },
    telephone:{
        type : Number
    },
    dob: {
        type: Date
    },
    classe: {
      type : String
    }
}, {
    collection: 'teachers'
})


module.exports = mongoose.model('TeacherSchema', TeacherSchema)
