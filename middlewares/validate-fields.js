const { response } = require('express');
const { validationResult } = require('express-validator');

const validateFields = (req, res = response, next) => {

    // manejo de errores
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }


    next();
}


const validateProfile = (req, res = response, next) => {

    // manejo de errores
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const { profile } = req.body;
    let profiles = ['ALUMNO', 'PROFESOR', 'DIRECTOR','USER', 'ADMIN'];
    let flag = false;
    for(let i = 0; i < profiles.length; i++){
        if(profile === profiles[i]){
            flag = true;
            break;
        }else{
            flag = false;
        }
    }

    if(!flag){
        return res.status(409).json({
            ok: false,
            profile: `El perfil ${profile} no existe`
        });
    }


    next();
}

module.exports = {
    validateFields,
    validateProfile
}
