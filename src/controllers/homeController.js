const connection = require('../config/database');
const getHomePage = (req, res) => {

    res.render('sample.ejs')

}
const getAboutPage = (req, res) => {
    let Users = [];
    // simple query
    // For pool initialization, see above
    connection.query("SELECT * FROM Users", function (err, rows, fields) {
        // Connection is automatically released when query resolves
        Users = rows;
        console.log('>>>> check user', Users);
        res.send(JSON.stringify(Users))

    })


}

module.exports = {
    getHomePage, getAboutPage
}