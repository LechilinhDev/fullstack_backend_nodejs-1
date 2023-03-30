const { createProjectSevrvice } = require('../services/projectService');
const createProject = async (req, res) => {
    let project = req.body;
    let result = await createProjectSevrvice(project);
    res.status(200).json({
        errorCode: 0,
        data: result
    })



}

module.exports = {
    createProject
}