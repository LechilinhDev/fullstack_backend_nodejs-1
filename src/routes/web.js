const express = require('express');
const router = express.Router();
const { getHomePage, getAboutPage, addUser, getCreateUser } = require('../controllers/homeController');

// difine the homepage route
router.get('/', getHomePage)
router.get('/about', getAboutPage)
router.get('/createUser', getCreateUser)
router.post('/addUser', addUser);

module.exports = router;