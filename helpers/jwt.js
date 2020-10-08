/**
 * Clase con los diferentes métodos para crear y verificar el JWT
 */

const jwt = require('jsonwebtoken');

const SEED = process.env.SECRET_JWT_SEED || '4un7i3a@2020'

const generateJWT = ( uid, name ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid, name };

        jwt.sign( payload, SEED, {
            expiresIn: '1h'
        }, (err, token ) => {

            if ( err ){
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve( token );

        })


    })
}

const verifyJWT = ( token ) => {

    return new Promise( (resolve, reject) =>{

        jwt.verify( token, SEED, (err, decoded) =>{
            if( err ){
                console.log(err);
                reject('El token ingresado es invalido para ese Perfil');
            }
            resolve( decoded );
        });

    });

}



module.exports = {
    generateJWT,
    verifyJWT
}

