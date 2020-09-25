const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let parentSchema = new Schema({
    prenom:{
        type : String
    },
    nom: {
        type: String
    },
    email: {
        type: String
    },
    telephone :{
        
        type: Number 
    },
    
   
}, {
    collection: 'parents'
})

var parents = module.exports = mongoose.model('parentSchema', parentSchema)
