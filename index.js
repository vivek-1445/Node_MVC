const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const port = 3000;
const app = express();
const db = require('./config/mongoose');
const path = require('path');
app.use(express.urlencoded());
app.set('view engine','ejs');

app.use(expressLayouts)

app.use(express.static('./assets'));

app.set('layout extractStyles',true);
app.get('/', function(req, res ,next) {
    res.redirect('/dashboard');
   });
app.use(function(req, res, next) {
    res.locals.url   = req.originalUrl;
    next();
 });
app.use('/',require('./routes'));
app.set('views',path.join(__dirname,'views'));


app.listen(port,function(error){
    if(error){
        console.log("somthing went wrong in db");
        return;
    }
    console.log("your server running on port",port)
});