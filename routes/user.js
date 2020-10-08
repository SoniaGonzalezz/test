const { Router } = require('express');
// const { check } = require('express-validator');
// const { validateFields } = require('../middlewares/validate-fields');
const { 
    getClients,
    getClientsById,
    loginUser
} = require('../controllers/user');
const router = Router();

router.post(
    '/login',
    loginUser
)

router.get(
    '/client',
    getClients
);

router.get(
    '/client/:id',
    getClientsById
);


module.exports = router;