const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI, postUploadSingelFileAPI, postUploadMultipleFileAPI } = require('../controllers/apiController');

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', createUserAPI);
routerAPI.put('/users', updateUserAPI);
routerAPI.delete('/users', deleteUserAPI);
routerAPI.post('/file', postUploadSingelFileAPI);
routerAPI.post('/files', postUploadMultipleFileAPI)


module.exports = routerAPI;