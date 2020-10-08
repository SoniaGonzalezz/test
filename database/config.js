const mongoose = require('mongoose');

const dbConnection = async() => {
    // let DB_USER = process.env.DB_USER;  
    // let DB_PASS = process.env.DB_PASS;
    // let DB_NAME = process.env.DB_NAME;

    try {
        
        await mongoose.connect(`mongodb://localhost:27017/hackaton`, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Hackaton DB');


    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }


}


module.exports = {
    dbConnection
}