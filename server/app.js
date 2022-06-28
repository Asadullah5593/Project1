const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:"./config.env"});

require("./db/conn")

const PORT = process.env.PORT;


//middleware

const middleware = (req, res, next) => {
    console.log("This is middleware!");
    next();
}



app.get('/', (req, res) =>{
    res.send("Hellooooooooooooo");
});

app.get('/about', middleware, (req, res) =>{
    res.send("About from server");
});

app.get('/contact', (req, res) =>{
    res.send("Contact us from server");
});

app.get('/signin', (req, res) =>{
    res.send("Sign in  from the server");
});

app.get('/signup', (req, res) =>{
    res.send("Singn up from server!");
});

app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}!`);
})