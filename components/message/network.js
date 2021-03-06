const express = require('express');
const controller = require('./controller')
const routes = express.Router();

const response = require('../../red/response')

routes.get('/',(req,res)=>{ 
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
    
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
//update
routes.patch('/:id',function (req,res){
    console.log(req.params.id);
    controller.updateMessage(req.params.id,req.body.message)
        .then((data)=>{
            response.success(req,res,data,200);
        })
        .catch(e=>{
            response.error(req,res,'Error interno',500,e);
        })
    res.send('ok')
})

routes.delete('/:id',function(req,res){
    controller.deleteMessage(req.params.id)
        .then(()=>{
            response.success(req,res,`Usuario ${req.params.id} eliminado`,200);
        })
        .catch(e=>{
            response.error(req,res,'Error interno',500,e);
        })
})

module.exports = routes;