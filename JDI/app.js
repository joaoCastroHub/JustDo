var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get("/login", function(req, res){
    res.render("login/login");
});

app.get("/", function(req, res){
    res.render("index");
});

app.listen(3000, function(){
    console.log("Servidor rodando");
});