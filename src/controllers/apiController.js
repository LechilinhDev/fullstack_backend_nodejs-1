const User = require('../models/users');
const { use } = require('../routes/api');
const getUsersAPI = async (req, res) => {
    const users = await User.find({})
    return res.status(200).json({
        errorCode: 0,
        data: users
    })
}
const createUserAPI = async (req, res) => {
    let { email, name, city } = req.body;

    const user = await User.create({
        email,
        name,
        city
    }).then(result => {
        console.log(result)
    })
    res.status(200).json({
        errorCode: 0,
        data: user
    })
}
const updateUserAPI = async (req, res) => {

    let { email, name, city, id } = req.body;

    const user = await User.updateOne({ _id: id }, { name, email, city, id })
    res.status(200).json({
        errorCode: 0,
        data: user
    })
}
const deleteUserAPI = async (req, res) => {
    const { id } = req.body;
    const user = await User.deleteOne({ _id: id });
    res.status(200).json({
        errorCode: 0,
        data: user
    })
}

module.exports = {
    getUsersAPI,
    createUserAPI,
    updateUserAPI,
    deleteUserAPI
}