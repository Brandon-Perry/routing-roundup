const express = require('express');

const app = express()

app.set('view engine', 'pug')


app.get('/',(req,res) => {
    res.send('Hello from Express!');
})

app.get(/(.)*xyz$/, (req, res) => {
    res.send("That's all I wrote.")
});

app.all('*', (req,res)=> {
    let rand = Math.floor(Math.random()*100)
    res.render('template1',{method:req.method, path:req.path, randomNumber:rand})
})

let port = 8081;

app.listen(port,()=> {
    console.log(`listening on port ${port}`)
})
