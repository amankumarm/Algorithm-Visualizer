const router = require('express').Router()
const passport = require('passport')
//auth login

router.get('/',(req,res)=>{
    res.render("login");
    
})

router.get('/logout',(req,res)=>{
    res.send("logout")
})
router.post('/google',passport.authenticate('google',{
    scope:['profile'],
    prompt: 'select_account'
})
)

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
   console.log(req.user)
//    res.json({msg:"hello aman"})
    res.redirect('/user#/')
res.end()
})

module.exports=router