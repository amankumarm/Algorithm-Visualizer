const express=require('express')
const { result } = require("lodash")
const cookieSession=require('cookie-session')
const passport = require("passport")
const fileupload=require('express-fileupload')
const mongoose = require('mongoose')
const authrouter=require('./routes/auth')
const {User,FileRoute,Post} = require('./models/index')
const fileuploadroute=require('./routes/fileupload')
const passportconfig=require('./config/passport-setup')
const userroute=require('./routes/userroute')
const Posts = require('./models/posts')

const app = express()
app.use(fileupload())
app.set('view engine','ejs')
app.set('views','templates')
app.use(express.static('static'))
app.use(express.urlencoded({extended:true}))

app.use(cookieSession({
     maxAge:24*60*60*1000,
     keys:["amankumar"]
   }))
   


app.listen(3000,()=>console.log("3000"))
mongoose.connect("mongodb+srv://algovizz:algovizz@node.bczjx.mongodb.net/Algovizz?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>{
     // app.listen(3000,()=>console.log('Listening at 3000'))
})
.catch(err=>console.log(err))

app.use(passport.initialize())
app.use(passport.session())
app.use('/auth',authrouter)
app.use('/user',userroute)

//routes
app.use('/file',fileuploadroute)

app.get('/',(req,res)=>{
     res.render('home')
})
app.get('/v/',(req,res)=>{
     res.render('root')
})

app.get('/user/',(req,res)=>{
     res.render('user')
})
app.get('/test',(req,res)=>{
//     
})

app.get('/logout', function(req, res){
     
     req.logout();
     res.json({loggedout:true });
   });

//check git logs


