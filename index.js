const express = require('express');
const port = 3000;
const app = express();

app.use('/',require('./routes'));

const path = require('path');

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.listen(port,function(error){
    if(error){
        console.log("somthing went wrong in db");
        return;
    }
    console.log("your server running on port",port)
});