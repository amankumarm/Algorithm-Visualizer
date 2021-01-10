const router= require('express').Router()
const {generaterandomname} = require('../functions')
const checkauth=(req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        res.status(403).json({error:"Please login"})
    }
}

router.get('/getstatus',checkauth,(req,res)=>{
      res.json({user:req.user}) 
})

router.post('/post',checkauth,(req,res)=>{
    
     


})


module.exports=router