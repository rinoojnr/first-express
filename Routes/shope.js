const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    console.log('home page');
    res.send('<h1>it is home</h1>');
});



module.exports = router;

