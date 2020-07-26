
const store = require('./store')

function addMessage(user, message){
    //
   return new Promise((resolve, reject) => {

    if(!user || !message){
        console.error('[messageController] No hay usuario o mensaje');
        reject('Los datos son incorrectos');
        return false;
    }
    const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
    }

    console.log(fullMessage);
    store.add(fullMessage);//se agrega el mensaje al almacenamiento
    resolve(fullMessage);//se entrega
   })
   
};

function getMessages(filterUser){
    return new Promise((resolve, reject) =>{
        resolve(store.list(filterUser)); //se entrega la lista de mensajes
    });
}

function updateMessage(id, message){
    //la funcion asincrona es la que esta dentro de la promesa
   return new Promise(async (resolve, reject) => {

    console.log(id);
    console.log(id);
    if (!id || !message){
        reject('Invalid data');
        return false;
    }

    const result = await store.updateText(id, message);

    resolve(result);//se entrega
   })
   
};

function deleteMessage(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            reject('Id invalido');
            return false;
        }
        store.remove(id)
        .then(() => {
            resolve();
        })
        .catch(e => {
            reject(e);
        })
    })
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}