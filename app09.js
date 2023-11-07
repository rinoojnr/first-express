const express = require('express');
const app = express();
const adminRoutes = require('./Routes/admin');
const shopeRoutes = require('./Routes/shope');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));



app.use('/admin',adminRoutes);
app.use('/shope',shopeRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})



app.listen(3000);