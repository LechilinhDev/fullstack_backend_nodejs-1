const { createProjectSevrvice, getProjectService } = require('../services/projectService');
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

module.exports = {
    createProject,
    getProject
}