const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI, postUploadSingelFileAPI, postUploadMultipleFileAPI } = require('../controllers/apiController');
const { postCreateCustomerAPI, postCreateCustomersAPI, getAllCustomerAPI, updateCustomerAPI } = require('../controllers/customerController');
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', createUserAPI);
routerAPI.put('/users', updateUserAPI);
routerAPI.delete('/users', deleteUserAPI);
routerAPI.post('/file', postUploadSingelFileAPI);
routerAPI.post('/files', postUploadMultipleFileAPI);
routerAPI.post('/customer', postCreateCustomerAPI);
routerAPI.post('/customers', postCreateCustomersAPI);
routerAPI.get('/customers', getAllCustomerAPI);
routerAPI.put('/customers', updateCustomerAPI);



module.exports = routerAPI;