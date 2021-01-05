const express=require('express')
const app = express()

app.set('view engine','ejs')
app.set('views','templates')
app.use(express.static('static'))

app.get('/',(req,res)=>{
     res.render('home')
})
app.get('/v/',(req,res)=>{
     res.render('root')
})





app.listen(5000,()=>console.log('Listening at 5000'))

