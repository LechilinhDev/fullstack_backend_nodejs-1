const express = require('express');
const router = express.Router();
const { getHomePage, getAboutPage, addUser, getCreateUser, getUpdateUser, updateUser } = require('../controllers/homeController');

// difine the homepage route
router.get('/', getHomePage)
router.get('/about', getAboutPage)
router.get('/createUser', getCreateUser)
router.get('/updateUser/:id', getUpdateUser)
router.post('/addUser', addUser);
router.post('/updateUser', updateUser)

module.exports = router;