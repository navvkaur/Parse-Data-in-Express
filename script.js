const http = require('http');
const bodyParser=require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>
{
    //console.log("I am another Middleware");
    res.send(`<form action = "/product" method="POST" >
    <label for="product">Product:</label><br>
    <input type="text" id="product" name="product" ><br>
    <label for="size">Size:</label><br>
    <input type="number" id="size" name="size" ><br><br>
    <input type="submit" value="Submit">
  </form> `);
    
});
app.post('/product',(req,res,next)=>
{
    console.log(req.body);
    res.redirect('/');
    
});
app.use('/',(req,res,next)=>
{
    //console.log("I am another Middleware");
    res.send('<h1> Hello from Express</h1>');
    
});

app.listen(3000);
