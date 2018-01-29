var app = require('./config/server');

//var rotaHome = require('./app/routes/home')(app);
//var rotaFormulario = require('./app/routes/formulario')(app)
//var rotaNoticias = require('./app/routes/noticias')(app);

app.listen(3000, function(){
    console.log('Servidor ON');
});