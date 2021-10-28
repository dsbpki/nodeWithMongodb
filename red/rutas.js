const express = require('express');
const message = require('../components/message/network');

const routes = function(server){
    server.use('/message',message);
    server.use('/formulario',express.static('public'))
   // server.use('/formulario',express.static('../public')) no funciona, supongo por que al invocarlo
   // desde server , el busca '../public' y desde server no funciona este comando, simplemente
   // con 'public'
}
module.exports = routes;