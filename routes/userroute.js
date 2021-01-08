const router= require('express').Router()

router.get('/getstatus',(req,res)=>{
    if (req.user) {
        res.json({user:true})

    }
    else{
        res.json({user:false})
    }   
    // next() 
})

module.exports=router