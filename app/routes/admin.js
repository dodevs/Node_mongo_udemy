module.exports = function(app){
    app.get('/formulario', function(req, res){
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;

        const connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.setNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });

    });
};