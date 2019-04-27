const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors= require('cors');
const path = require('path');
const route = require('./routes/routes');

var app= express();

mongoose.connect('mongodb://localhost:27017/contactlist',{ useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
    console.log("success connect");
});

mongoose.connection.on('error',(err)=>{
    if(err)
        console.log("error connect"+err);
});

const port = 3000;

app.use(cors());

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);

app.get('/',(req,res)=>{
    res.send("succes");
})

app.listen(port,()=>{
    console.log("Server activated at port :"+port);
    
})