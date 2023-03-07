const connection = require('../config/database');
const User = require('../models/users');
const getAllUser = async () => {
    const results = await User.find({})
    console.log(results)
    return results;
}
const addNewUser = async (req, res) => {
    let { email, name, city } = req.body;

    await User.create({
        email,
        name,
        city
    }).then(result => {
        console.log(result)
    })



}

const getUserById = async (id) => {


    const results = await User.findById(id).exec();

    return results;
}
const updateUserById = async (req, res) => {
    let { email, name, city, userId } = req.body;

    await User.updateOne({ email, name, city, userId })

}
const
    handleDeleteUser = async (req, res) => {
        let id = req.body.userId;

        await User.deleteOne({ id: id });
    }
module.exports = {
    getAllUser, addNewUser, getUserById, updateUserById, handleDeleteUser
}