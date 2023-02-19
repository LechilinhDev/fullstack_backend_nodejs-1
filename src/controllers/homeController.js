
const { getAllUser, addNewUser } = require('../services/CRUDServices');
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

    // console.log('>>>>check result', results)
    res.send('Create User Sucsess!');


}

const getCreateUser = (req, res) => {
    res.render('createUser.ejs')
}

module.exports = {
    getHomePage, getAboutPage, addUser, getCreateUser
}