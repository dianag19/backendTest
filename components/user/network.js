const express = require('express');
const router = express.Router();
const response = require('../../network/response');//FUNCIONES DE RESPUESTAS GENERICAS O RENDERIZADAS
const controller = require('./controller');


//NETWORK CONTIENE LAS FUNCIONES
// router.get('/', function(req, res){
//     const filterMessages = req.query.user || null;
//     controller.getMessages(filterMessages)
//     .then((messageList) => {
//         response.success(req, res, messageList, 200);
//     })
//     .catch(e => {
//         response.error(req, res, 'Unexpected Error', 500, e)//RESPUESTA 200
//     })
// });

router.post('/', function(req, res){
    

    controller.addUser(req.body.phone, req.body.name, req.body.lastname, req.body.pwd, req.body.documentId)
    .then((fullUser) => {
        response.success(req,res, fullUser, 201);//RESPUESTA 201 AL POST
    })
    .catch(e => {
        response.error(req,res, 'Información incompleta, llena los campos faltantes', 400, 'Error en el controlador');
   
    });
    // res.status(201).send([{
    //     error: '',
    //     body: 'Creado correctamente'
    // }]);
});

//patch para actualizar
// router.patch('/:id', function(req, res){
//     //console.log(req.params.id);//imprime id que pasamos por url

//     controller.updateMessage(req.params.id, req.body.message)
//     .then((data) => {
//         response.success(req, res, data, 200);
//     })
//     .catch(e => {
//         response.error(req, res, 'Error interno', 500, e);
//     });
//    // res.send('Ok');//respuesta de la peticion
// });

// router.delete('/:id',function(req,res){
//     controller.deleteMessage(req.params.id)
//     .then(() => {
//         response.success(req, res, `Mensaje ${req.params.id} eliminado`,200);
//     })
//     .catch(e => {
//         response.error(req, res, 'Error interno', 500, e);
//     })
// })
//exportar router
module.exports = router;