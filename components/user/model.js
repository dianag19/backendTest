const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//declaramos modelo
// const mySchema = new Schema({
//     user : String,
//     message : String,
//     date : Date,
// });

//declarando type USER
const mySchema = new Schema({
    phone : String,
    name : String,
    lastname : String,
    pwd : String,
    documentId : Number,
    dateRegister: Date,
});

const model = mongoose.model('User', mySchema);//declaracion de tabla y modelo
module.exports = model;