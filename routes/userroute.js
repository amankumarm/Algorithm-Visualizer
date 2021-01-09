const router= require('express').Router()

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

module.exports=router