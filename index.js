const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();

const PORT = process.env.PORT || '3000'

// Base de datos
dbConnection();

// CORS
app.use(cors())

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/users/v0', require('./routes/user'));

// Escuchar peticiones
app.listen(PORT, () => {
    console.log('Escuchando puerto: ',PORT);
});