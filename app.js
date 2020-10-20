const express = require('express');
const routes = require('./routes');
const app = express();



app.set('view engine', 'pug');

app.use('/margot', routes);
app.use('/margeaux', routes);

app.get('/',(req,res) => {
    res.send('Hello from Express!');
})

app.get(/(.)*xyz$/, (req, res) => {
    res.send("That's all I wrote.")
});

app.get(/capital-letters[A-Za-z0-9]?.?(.*)/, (req, res) => {
    let after = req.path.split("capital-letters/")[1];
    res.send(after.toUpperCase());
});

app.all(/[A-Za-z0-9]?$/, (req,res)=> {
    let split = req.path.split("/");
    if(split.length > 2){
        res.statusCode =404;
        res.send("404: Invalid");
    }
    else {
        console.log(split);
        let rand = Math.floor(Math.random()*100)
        res.render('template1',{method:req.method, path:req.path, randomNumber:rand})
    }
})

let port = 8081;

app.listen(port,()=> {
    console.log(`listening on port ${port}`)
})
