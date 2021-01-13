const router= require('express').Router()
const func = require('../functions')
const { Post } = require('../models')
const Posts = require('../models/posts')
const checkauth=(req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        res.status(403).json({error:"Please login"})
    }
}

router.get('/getstatus',checkauth,(req,res)=>{  
    res.status(200).json({user:req.user}) 
})  

router.post('/post',checkauth,(req,res)=>{
    const id=req.user.googleid
    const category=req.body.categ
    console.log("wdwed")
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(404).json({message:'No files were uploaded.'});
      }
      const htmlfile=req.files.htmlfile
      const imagefile=req.files.postimage
      const incimageformat=imagefile.name.split('.')[1]
      const inewname=func()
      const hnewname=func()
      
      var post={
          html:`./userPosts/html/${hnewname}.html`,
          image:`./userPosts/images/${inewname}.${incimageformat}`,
          category
      }
    
    //   console.log(req.body)      
      htmlfile.mv(`./static/userPosts/html/${hnewname}.html`,(err)=>{
          if(err){
              console.log(err)
                res.status(503).json({message:"Serverside error occured.Try again Later"})
          }
      })
      imagefile.mv(`./static/userPosts/images/${inewname}.${incimageformat}`,(err)=>{
          if (err) {
            console.log(err)

              res.status(503).json({message:"Server-side error occured.Try again later"})
          }
      })

      Posts.updateOne({id},{$push:{posts:post}})
      .then(res=>console.log(res))
      .catch(err=>console.log(err))


      res.status(200)

})

router.get('/getuserposts',checkauth,(req,res)=>{
    const id=req.user.googleid
    Posts.find({id})
    .then(allposts=>{
        res.status(200).json({posts:allposts[0].posts})
    })
    .catch(err=>res.status(503).json({msg:"Something Went Wrong. Please try again later"}))
    // res.end()
})


module.exports=router