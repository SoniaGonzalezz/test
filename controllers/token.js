/**
 * Controlador encargado de crear el token por medio de JWT
 */
const { response } = require('express');
const { generateJWT } = require('../helpers/jwt');
require('dotenv').config();

const createToken = async(req, res = response) => {

    const { profile } = req.body;

    try {
        const token = await generateJWT(profile, process.env.ENVIRONMENT);

        res.status(200).json({
            msg: 'Token generado exitosamente',
            data:{
                profile,
                token
            }
            
        });
    }catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

module.exports = {
    createToken
}