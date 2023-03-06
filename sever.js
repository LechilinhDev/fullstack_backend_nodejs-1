const express = require('express')
const app = express()
require('dotenv').config();
// config req.body
const connection = require('./src/config/database')
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');
// const path = require('path');
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;

// config view engine and static file
configViewEngine(app);

app.use('/', webRoutes);

//test conectio
(async () => {
    try {
        await connection();
        app.listen(port, hostName, () => {
            console.log(`Example app listening on port ${port}---${hostName}`)
        })
    } catch (error) {
        console.log('Connection to DB error', error);
    }

})()







