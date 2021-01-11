const mongoose=require('mongoose')
const Schema=mongoose.Schema

const postschema = new Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    posts:{
        type:Array,
        required:true
    }
})

const Posts=mongoose.model('Posts',postschema)
module.exports=Posts
