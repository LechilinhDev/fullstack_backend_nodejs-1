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



}

const getUserById = async (id) => {


    const [results, fields] = await connection.query(`SELECT * FROM Users WHERE id=?`, [id]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const updateUserById = async (req, res) => {
    let { email, name, city, userId } = req.body;

    let [results, fields] = await connection.query(
        `
        UPDATE Users
        SET email = ?, name = ?, city =?
        WHERE Id = ?;
        `, [email, name, city, userId]
    )

}
module.exports = {
    getAllUser, addNewUser, getUserById, updateUserById
}