const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI, postUploadSingelFileAPI, postUploadMultipleFileAPI } = require('../controllers/apiController');
const { postCreateCustomerAPI, postCreateCustomersAPI } = require('../controllers/customerController');
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', createUserAPI);
routerAPI.put('/users', updateUserAPI);
routerAPI.delete('/users', deleteUserAPI);
routerAPI.post('/file', postUploadSingelFileAPI);
routerAPI.post('/files', postUploadMultipleFileAPI);
routerAPI.post('/customer', postCreateCustomerAPI);
routerAPI.post('/customers', postCreateCustomersAPI);


module.exports = routerAPI;