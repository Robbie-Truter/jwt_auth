const mongoose = require ( 'mongoose' );

//defining schema for mongodb
let schema = mongoose.Schema({
    IT:{
        type: String ,
        required: true,
    },
    development:{
        type: String ,
        required: true,
    },
    finances:{
        type: String ,
        required: true ,
    },
    writing:{
        type: String,
        required: true
    },
    credential_repository:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    management:{
        type:Boolean,
        required:true
    },
    admin:{
        type:Boolean,
        required:true
    },
});

let OU = mongoose.model('software reviews', schema);

module.exports = {
    OU:OU
}