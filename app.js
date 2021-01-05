const express=require('express')
const fileuploadroute=require('./routes/fileupload')
const fileupload=require('express-fileupload')
const app = express()
app.use(fileupload())
app.set('view engine','ejs')
app.set('views','templates')
app.use(express.static('static'))


//routes
app.use('/file',fileuploadroute)

app.get('/',(req,res)=>{
     res.render('home')
})
app.get('/v/',(req,res)=>{
     res.render('root')
})




app.listen(5000,()=>console.log('Listening at 5000'))

