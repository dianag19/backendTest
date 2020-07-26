const store = require("./store");

function addUser(phone, name, lastname, pwd, documentId) {
  //
  return new Promise((resolve, reject) => {
    if (!phone || !documentId || !name || !lastname || !pwd) {
      console.error("[messageController] No hay usuario o mensaje");
      reject("Información incompleta, llena los campos faltantes");
      return false;
    }
    const fullUser = {
      phone: phone,
      name: name,
      lastname: lastname,
      pwd: pwd,
      documentId: documentId,
      dateRegister: new Date(),
    };

    console.log(fullUser);
    store.add(fullUser); //se agrega el mensaje al almacenamiento
    resolve(fullUser); //se entrega
  });
}

// function getMessages(filterUser) {
//   return new Promise((resolve, reject) => {
//     resolve(store.list(filterUser)); //se entrega la lista de mensajes
//   });
// }

// function updateMessage(id, message) {
//   //la funcion asincrona es la que esta dentro de la promesa
//   return new Promise(async (resolve, reject) => {
//     console.log(id);
//     console.log(id);
//     if (!id || !message) {
//       reject("Invalid data");
//       return false;
//     }

//     const result = await store.updateText(id, message);

//     resolve(result); //se entrega
//   });
// }

// function deleteMessage(id) {
//   return new Promise((resolve, reject) => {
//     if (!id) {
//       reject("Id invalido");
//       return false;
//     }
//     store
//       .remove(id)
//       .then(() => {
//         resolve();
//       })
//       .catch((e) => {
//         reject(e);
//       });
//   });
// }
module.exports = {
  addUser,
//   getMessages,
//   updateMessage,
//   deleteMessage,
};
