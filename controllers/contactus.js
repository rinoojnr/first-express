const path = require('path');
const rootDir = require('../util/path')

exports.getContact = (req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','contactus.html'));
   res.sendFile(path.join(rootDir,'views','contactus.html'))
}