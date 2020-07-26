//const list = [];//LISTA DE MENSAJES
const Model = require('./model');
const { removeListener } = require('./model');
//mongodb+srv://dianag:diana9908@cluster0.xxrt3.mongodb.net/cluster0?retryWrites=true&w=majority



function addUser(user){
    console.log(user)
    const myUser = new Model(user);
    myUser.save();
    //list.push(message);//SE RECIBE Y AGREGA MENSAJE A LISTA
}

// async function getMessage(filterUser){
//     //filtro por defecto
//     let filter = {};
//     if(filterUser !== null){
//         filter = {user: filterUser};
//     }
//     //return list;//SE RETORNA LA LISTA DE MENSAJES
//     const messages = await Model.find(filter);
//     return messages;
// }

// async function updateText(id, message){
//     const foundMessage = await Model.findOne({
//         _id : id
//     });

//     foundMessage.message = message;
//     const newMessage = await foundMessage.save();
//     return newMessage;
// }

// function removeMessage(id){
//     return Model.deleteOne({
//         _id : id
//     });
// }
//SE EXPORTAN LAS FUNCIONES
module.exports = {
     add : addUser,
    // list : getMessage,
    // updateText : updateText,
    // remove : removeMessage,
    //get
    //update
    //delete
}