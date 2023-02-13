const express = require('express');
const router = express.Router();

// difine the homepage route
router.get('/', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;