//Nomeando
module.exports.formulario = function(app, req, res){
    res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
}

module.exports.salvar_noticia = function(app, req, res){
    var noticia = req.body;

    //Verificar a documentação do express-validator
    req.assert('titulo', 'Título obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória').notEmpty();
    req.assert('noticia', 'Noticia é obrigatória').notEmpty();

    var erros = req.validationErrors();

    console.log(erros);

    if(erros){
        res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
        return;
    }

    const connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.setNoticia(noticia, function(error, result){
        res.redirect('/noticias');
    });
}
