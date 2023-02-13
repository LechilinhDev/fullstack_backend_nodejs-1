const express = require('express')
const app = express()
require('dotenv').config();
const connection = require('./src/config/database');
const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');
// const path = require('path');
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;

// config view engine and static file
configViewEngine(app);

app.use('/', webRoutes);

// simple query
connection.query(
    'SELECT * FROM Users ',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server

    }
);



app.listen(port, hostName, () => {
    console.log(`Example app listening on port ${port}---${hostName}`)
})