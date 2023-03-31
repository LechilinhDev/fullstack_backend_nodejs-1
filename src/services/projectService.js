const Project = require('../models/project');
module.exports = {
    createProjectSevrvice: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let result = await Project.create(data);
            return result;
        }
        if (data.type === "ADD-USER") {

            let findProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.userArr.length; i++) {
                findProject.usersInfor.push(data.userArr[i]);
            }

            let newResult = findProject.save();
            console.log('....check data', findProject);
            return newResult
        }
        return null;
    }
}