const express = require('express');
const app=express();
const firstpageRouter=require('./routers/firstpageRouter');
const applyleaveRouter=require('./routers/applyleaveRouter');
app.use(express.json());
app.set('view engine','ejs');
app.set('views','./src/public');
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

app.use('/',firstpageRouter);
app.use('/apply-leave',applyleaveRouter);

module.exports=app;
