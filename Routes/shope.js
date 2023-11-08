const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req,res)=>{
    console.log('home page');
    res.sendFile(path.join(rootDir,'views','shope.html'));
});
// router.get('/',(req,res)=>{
//     console.log('home page');
//     res.sendFile(path.join(__dirname,'../','views','shope.html'));  ////before util========================
// });



module.exports = router;

