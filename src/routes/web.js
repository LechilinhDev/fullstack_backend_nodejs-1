const express = require('express');
const router = express.Router();
const { getHomePage, getAboutPage, addUser, getCreateUser, getUpdateUser, updateUser, deleteuser, postHandleDeleteuser } = require('../controllers/homeController');

// difine the homepage route
router.get('/', getHomePage)
router.get('/about', getAboutPage)
router.get('/createUser', getCreateUser)
router.get('/updateUser/:id', getUpdateUser)
router.post('/addUser', addUser);
router.post('/updateUser', updateUser);
router.post('/deleteUser/:id', deleteuser);
router.post('/deleteUser', postHandleDeleteuser);


module.exports = router;