const express = require('express');

const configViewEngine = (app) => {

    // config template engine
    app.set('views', './src/views');
    app.set('view engine', 'ejs');
    // config static file
    // app.use(express.static(path.join(__dirname, 'src/public')));
    app.use(express.static('src/public'));

}

module.exports = configViewEngine;