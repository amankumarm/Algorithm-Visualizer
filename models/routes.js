const mongoose=require('mongoose')
const Schema=mongoose.Schema

const routeschema=new Schema({
    routes:{
        type:Array
    }
})

const FileRoute=mongoose.model('FileRoute',fileroute)
model.exports=FileRoute