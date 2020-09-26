const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let testSchema = new Schema({
    controle:{

       matiere: {
            type : String
        },
        //date de creation
        created_at    : {
            type: Date, 
            required: true,
             default: Date.now 
         },
         //tableau a deux dimensions contenant les eleves et leurs notes 
         
       studmark : [{
                  student: {
                     
                         type:  String
        },
                  mark: {

                        type :Number
        }
    }],
    
} 
   
}, {
    collection: 'test'
})

var test = module.exports = mongoose.model('testSchema', testSchema)
