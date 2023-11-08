const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');



// router.get('/add-product',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../','views','add-product.html')) ///before util====================
// })
router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})
router.post('/add-product',(req,res)=>{
    console.log(req.body);
    res.redirect('/shope');
})



module.exports = router;