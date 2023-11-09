const express = require('express');
const app = express();
const adminRoutes = require('./Routes/admin');
const shopeRoutes = require('./Routes/shope');
const contactRoutes = require('./Routes/contactus');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
const path =require('path');
const rootDir = require('./util/path');


// app.use('/admin',adminRoutes);
// app.use('/shope',shopeRoutes);
// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page Not Found</h1>')
// })
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopeRoutes);
app.use(contactRoutes);

// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
// })
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})



app.listen(3004);