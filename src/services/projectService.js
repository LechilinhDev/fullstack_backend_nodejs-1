const Project = require('../models/project');
const aqp = require('api-query-params');
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
    },
    getProjectService: async (data) => {
        const page = data.page;
        const { filter, limit, population } = aqp(data);
        delete filter.page;
        let offset = (page - 1) * limit;
        let results = await Project.find(filter).populate(population).skip(offset).limit(limit).exec();

        console.log('>>>check result', results)

        return results;
    }
}