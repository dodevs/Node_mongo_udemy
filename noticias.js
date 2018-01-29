var http = require('http'); //Require modulo http

var server = http.createServer( function(req, res){ //Passa uma função como parametro em 'createServer'

    var categoria = req.url;

    if (categoria == '/tecnologia'){
        res.end("<html><body> Notícias de Tecnologia </body></html>")
    } 
    else if (categoria == '/moda'){
        res.end("<html><body> Notícias de Moda </body></html>")
    }
    else if (categoria == '/beleza'){
        res.end("<html><body> Notícias de Beleza </body></html>")
    }
    else {
        //A função vai ter a requisição (req) e a resposta que será dada (res)
        res.end("<html><body> Portal de Noticias </body></html>")
    }
});

server.listen(3000);