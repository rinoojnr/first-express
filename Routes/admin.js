const express = require('express');
const router = express.Router();



router.get('/add-product',(req,res)=>{
    res.send('<form  action="/admin/add-product" method="POST"><input type ="text" name="item" placeholder="item"><input type ="number" name="size" placeholder="count"><button type="submit">Add</button></form>')
})

router.post('/add-product',(req,res)=>{
    console.log(req.body);
    res.redirect('/shope');
})



module.exports = router;