const User = require('../models/users');
// const { use } = require('../routes/api');
const { upLoadSingleFile, uploadMultipleFile } = require('../services/fileService');
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
        return result;
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

const postUploadSingelFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let results = await upLoadSingleFile(req.files.image);
    res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postUploadMultipleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    if (Array.isArray(req.files.image)) {
        let results = await uploadMultipleFile(req.files.image);
        res.status(200).json({
            errorCode: 0,
            data: results
        })
    } else {
        return await postUploadSingelFileAPI(req, res);
    }

}

module.exports = {
    getUsersAPI,
    createUserAPI,
    updateUserAPI,
    deleteUserAPI,
    postUploadSingelFileAPI,
    postUploadMultipleFileAPI
}