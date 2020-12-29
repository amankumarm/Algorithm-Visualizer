const express=require('express')
const cors=require('cors')
const app = express()

app.set('view engine','ejs')
app.set('views','templates')
app.use(express.static('static'))
app.use(cors)

app.get('/',(req,res)=>{
     res.send('hello')
})

app.listen(5000,()=>console.log('Listening at 5000'))

