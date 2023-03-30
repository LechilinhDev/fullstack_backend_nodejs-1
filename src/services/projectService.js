const Project = require('../models/project');
module.exports = {
    createProjectSevrvice: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let result = await Project.create(data);
            return result;
        }
    }
}