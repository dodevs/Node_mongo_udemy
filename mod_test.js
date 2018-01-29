//Retorna de acordo com o commonJS
module.exports = function(){
    var msg = "Este modulo contém apenas uma string";
    return msg;
}

//Se o modulo retorna uma função, temos que executar..'require(blabla)()'
var msg = require('./mod_test')(); 