// const mysql = require('mysql2/promise');
const mongoose = require('mongoose');



// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0

// });
const connection = async () => {
    const dbState = [{
        value: 0,
        label: "disconnected"
    },
    {
        value: 1,
        label: "connected"
    },
    {
        value: 2,
        label: "connecting"
    },
    {
        value: 3,
        label: "disconnecting"
    }];
    const option = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASWORD,
        dbName: process.env.DB_NAME
    }


    await mongoose.connect(process.env.DB_HOST, option);
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to db");




}
module.exports = connection;

