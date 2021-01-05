const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const staffschema=new Schema({
    name:{
        type:String,
        required:true
    },
    subject:{
        name:String
    }
})

const staff=mongoose.model('Staff',staffschema)
module.exports=staff