/**
 * Schema del modelo de usuarios.
 */
const { Schema, model } = require('mongoose');

let profiles = ['Manager', 'Validador', 'Restringido'];

const UserSchema = Schema({
    usuario: {
        type: String,
        required: true
    },
    auth:{
        type: String,
        required: true
    },
    nombreCompleto: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    profile:{
        type: String,
        required: true,
        enum: profiles
    },
   area: {
       type: String,
       required: true
   },
   ubicacion: {
       type: String,
       required: true
   },
   segmento: {
       type: String,
       required: true
   },
   perfil:{
       type: String,
       required:true
   }

});


module.exports = model('User', UserSchema );