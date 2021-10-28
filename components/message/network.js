const express = require('express');
const controller = require('./controller')
const routes = express.Router();

const response = require('../../red/response')

routes.get('/',(req,res)=>{ 
    controller.getMessages()
    .then((messageList)=>{
        response.success(req,res,messageList,200)
    })
    .catch(e=>{
        response.error(req,res,'Unexpected error',500,e)
    })
   
 
})
routes.post('/',(req,res)=>{
    controller.addMessage(req.body.user,req.body.message)   
    .then((fullMessage)=>{
        response.success(req,res,fullMessage)
    })
    .catch(e=>{
        response.error(req,res,'informacion invalida',400,'es solo un error simulado');
    })
})

module.exports = routes;