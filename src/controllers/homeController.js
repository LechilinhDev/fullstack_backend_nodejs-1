
const getHomePage = (req, res) => {
    res.render('sample.ejs')
}
const getAboutPage = (req, res) => {

    res.send('About page')
}

module.exports = {
    getHomePage, getAboutPage
}