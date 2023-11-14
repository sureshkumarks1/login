const express = require("express");
const path = require('path')

const app = express();

app.set('view engine','hbs')
app.set('views', path.join(__dirname, '../views'));

app.get('',(req,res)=>{
    res.render('index',{
        'title':"sample.com",
        'name': 'suresh kumar'
    })
})



app.listen(4000,()=>{
    console.log("Server Started at port 3000 ");
});