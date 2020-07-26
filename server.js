// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
//import modules
const express = require('express');
//import express from 'express'; E6
//Router
//const router = require('./components/message/network');
const db = require('./db');
const router = require('./network/routes');
//Body
const bodyParser = require('body-parser');
const response = require('./network/response');


db('mongodb+srv://dianag:diana9908@cluster0.xxrt3.mongodb.net/testdb?retryWrites=true&w=majority')
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);

// app.use('/', function(req, res){
//     res.send('Hola');
// })

app.use('/app', express.static('public'));
app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');