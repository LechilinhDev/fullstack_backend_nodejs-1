const express = require('express')
const app = express()
require('dotenv').config();


const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');
// const path = require('path');
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;

// config view engine and static file
configViewEngine(app);

app.use('/', webRoutes);





app.listen(port, hostName, () => {
    console.log(`Example app listening on port ${port}---${hostName}`)
})