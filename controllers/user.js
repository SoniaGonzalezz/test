
const { response } = require('express');
const User = require('../models/User');
const Client = require('../models/Client')
const { verifyJWT, generateJWT } = require('../helpers/jwt');

const loginUser = async(req, res = response) => {

    const { usuario,auth } = req.body;
    

    //const {uid, name } = await verifyJWT(token);

    try {

        const user = await User.findOne({ usuario });

        if( !user ){
            return res.status(404).json({
                data:{
                    msg: 'No se encontro a un usuario con ese usuario'
                }
            });
        }

        if( user.auth != auth ){
            return res.status(404).json({
                msg: 'Contraseña incorrecta'
            })
        }

         const token = await generateJWT(user.auth, user.perfil);

        res.status(200).json({
           token
        });

    }catch( error ){
        console.log( error );
        res.status(500).json({
            data:{
                msg: 'Por favor hable con el administrador'
            }
        });
    }
}



const getClients = async(req, res = response ) => {
    const client = await Client.find();

    res.status(200).json({
        data:{
            client: client
        }
    });
}


const getClientsById = async(req, res = response ) => {
    const token = req.headers['access-token'];
    const { uid } = await verifyJWT(token);
    const user = await User.findOne({auth: uid});
    if(user.perfil === 'Manager'){
        const idCliente = req.params.id
        const client = await Client.findOne({idCliente});
        
        if( !client ){
            return res.status(404).json({
                data:{
                    msg: 'No se encontro a un usuario con ese Id'
                }
            });
        }
    
        res.status(200).json({
            client
        });
    }else{
        res.status(500).json({
            msg:'Perfil no valido'
        })
    }
    
}

module.exports = {
    loginUser,
    getClients,
    getClientsById,
}