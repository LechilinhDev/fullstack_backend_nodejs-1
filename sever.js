const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();
// config req.body
const fileUpload = require('express-fileupload');
const connection = require('./src/config/database')
// import monggodbnodejsdriver
const { MongoClient } = require('mongodb');
// default options
app.use(fileUpload());
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

const configViewEngine = require('./src/config/viewEngine');

const webRoutes = require('./src/routes/web');
const APIRouter = require('./src/routes/api')
// const path = require('path');
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;

// config view engine and static file
configViewEngine(app);

app.use('/', webRoutes);
app.use('/v1/api', APIRouter);

//test conection

(async () => {
    try {
        //using monggoose
        await connection();
        // using monggonodejsdriver

        // Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);

        // Database Name
        const dbName = process.env.DB_NAME;

        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db(dbName);
        const collection = db.collection('customers');

        collection.insertOne({ name: 'lechilinh2', age: 30, city: 'hcm' })



        app.listen(port, hostName, () => {
            console.log(`Example app listening on port ${port}---${hostName}`)
        })
    } catch (error) {
        console.log('Connection to DB error', error);
    }

})()







