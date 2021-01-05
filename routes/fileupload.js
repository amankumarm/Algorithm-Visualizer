const router=require('express').Router()

router.get('/',(req,res)=>{
    res.render('file')

})

router.post('/',(req,res)=>{
    // console.log(req.body)
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
      
    const file=req.files.file
    file.mv(`./static/uploaded/${req.body.route}.js`,(err)=>{
        if (err)
        console.log('err occ')
        return res.status(500).send(err)

    })

    console.log('file saved')

})

module.exports=router