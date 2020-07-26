const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//declaramos modelo
// const mySchema = new Schema({
//     user : String,
//     message : String,
//     date : Date,
// });

//declarando type
const mySchema = new Schema({
    user : String,
    message :{
        type: String,
        required : true,
    },
    date : Date,
});

const model = mongoose.model('Message', mySchema);//declaracion de tabla y modelo
module.exports = model;