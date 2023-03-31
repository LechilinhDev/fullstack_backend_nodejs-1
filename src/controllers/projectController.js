const { createProjectSevrvice, getProjectService, deleteProjectService, updateProjectService } = require('../services/projectService');
const createProject = async (req, res) => {
    let project = req.body;
    let result = await createProjectSevrvice(project);
    res.status(200).json({
        errorCode: 0,
        data: result
    })



}

const getProject = async (req, res) => {
    let result = await getProjectService(req.query);
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const deleteProjectAPI = async (req, res) => {
    let result = await deleteProjectService(req.query.id);

    res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const updateProjectAPI = async (req, res) => {

    let result = await updateProjectService(req.body);
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}

module.exports = {
    createProject,
    getProject,
    deleteProjectAPI,
    updateProjectAPI
}