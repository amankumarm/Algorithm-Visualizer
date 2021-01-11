const Post=require('./posts')
const mongoose=require('mongoose')
const Schema= mongoose.Schema

const userschema= new Schema({
    googleid:{
        type:String,
        required:true,
        unique:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    profilepic:{
        type:String,
    },
    role:{
        type:String,
        required:true
    }
})

const User=mongoose.model('User',userschema)



const routeschema=new Schema({
    routes:{
        type:Array
    }
})

const FileRoute=mongoose.model('FileRoute',routeschema)

module.exports={User,FileRoute,Post}