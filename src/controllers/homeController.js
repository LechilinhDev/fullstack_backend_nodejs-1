const connection = require('../config/database');
const { getAllUser, addNewUser, getUserById, updateUserById } = require('../services/CRUDServices');
const getHomePage = async (req, res) => {

    // res.send(JSON.stringify(rows))
    let results = await getAllUser();

    return res.render('home.ejs', { listUser: results })

}
const getAboutPage = async (req, res) => {
    // let Users = [];
    // simple query
    // For pool initialization, see above
    // connection.query("SELECT * FROM Users", function (err, rows, fields) {
    //     // Connection is automatically released when query resolves
    //     Users = rows;
    //     console.log('>>>> check user', Users);
    //     res.send(JSON.stringify(Users))

    // })
    res.send('About Page!')


}
const addUser = async (req, res) => {
    // let name = req.body.name;
    // let email = req.body.email;
    // let city = req.body.city;
    // let { email, name, city } = req.body;
    await addNewUser(req, res);


    res.send('Create User Sucsess!');


}

const getCreateUser = (req, res) => {

    res.render('createUser.ejs');

}
const getUpdateUser = async (req, res) => {
    let id = req.params.id;
    let results = await getUserById(id);


    return res.render('edit.ejs', { userUpdate: results })
}

const updateUser = async (req, res) => {

    await updateUserById(req, res);
    return res.redirect('/');

}

module.exports = {
    getHomePage, getAboutPage, addUser, getCreateUser, getUpdateUser, updateUser
}