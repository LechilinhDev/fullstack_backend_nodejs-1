const connection = require('../config/database');
const getAllUser = async () => {
    const [results, fields] = await connection.query("SELECT * FROM Users");
    return results;
}
const addNewUser = async (req, res) => {
    let { email, name, city } = req.body;
    let [results, fields] = await connection.query(
        `
        INSERT INTO Users (email,name,city) VALUES(?,?,?)
        `, [email, name, city]
    )
    console.log('>>> check reequets ', results)
}

module.exports = {
    getAllUser, addNewUser
}