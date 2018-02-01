var express = require('express'); //Require modulo express
var consign = require('consign'); //Modulo para ajudar a instanciar as rotas
var bodyParser = require('body-parser'); //Módulo para recuperar dados enviados atraves do formulario 
var expressValidator = require('express-validator'); //Módulo para validar as entradas

var app = express(); //Instancia o modulo
app.set('view engine', 'ejs');
app.set('views', './app/views'); //O diretório raiz é onde o modulo esta sendo utilizado

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true})); //Body parser implementado como Middleware
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app); //Inclui as rotas dessa pasta no 'app'

module.exports = app;