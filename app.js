const express = require('express');

//creating react app

const app = express();

//Listening to server
app.listen(3000);

app.get('/',(req,res)=>{
    //res.send('<p>Hii Shivam</p>');
    res.sendFile('./views/index.html',{root: __dirname});
})

app.get('/about',(req,res)=>{
    //res.send('<p>Hii This is about page</p>');

    res.sendFile('./views/about.html',{root: __dirname});
})