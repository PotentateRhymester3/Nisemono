'use strict';
var http = require('http');
var dbLogin = require('.//dbLogin');
var express = require('express');
var session = require('express-session');
var app = express();
const MongoClient = require('mongodb').MongoClient;
var port = process.env.PORT || 5000;

// Routers
var indexRouter = require('./routes/index'),
    gameRouter = require('./routes/game')

var mongoclient = new MongoClient('mongodb+srv://admin:<password>@cluster0.w5vf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoclient.connect(error => {
    console.log("Accessed db")
});

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

// Routing
app.use('/', indexRouter);
app.use('/game', gameRouter);


app.listen(port);
