var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get("/login", function (req, res) {
    res.render("login/login");
});

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(3000, function () {
    console.log("Servidor rodando");
});

app.use('/', express.static(__dirname + '/www'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));