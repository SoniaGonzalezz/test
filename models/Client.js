/**
 * Schema del modelo de usuarios.
 */
const { Schema, model } = require('mongoose');

const ClientSchema = Schema({
    idCliente:{
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: false
    },
    fechaNacimiento: {
        type:  Date,
        required: true 
    },
    sexo: {
        type: String,
        required: true
    },
    segmento: {
        type: String,
        required: true
    },
    nacionalidad:{
        type: String,
        required: true
    },
    rfc:{
        type: String,
        required: false
    },
    tipoId:{
        type: String,
        required: true
    },
    numeroId:{
        type:String,
        required: true
    },
    cuenta: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    }
});


module.exports = model('Client', ClientSchema );