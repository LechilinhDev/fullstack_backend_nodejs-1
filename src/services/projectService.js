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

            return newResult
        }
        if (data.type === "REMOVE-USERS") {
            // query body in postman
            // {
            //     "type": "REMOVE-USERS",
            //     "projectId": "6427204c940161c2ea09ca51",
            //     "userArr": ["640b85499f1884dc6c69e6ef", "64268e218f4fb91c461475e7","6426a286670c64bdbfedb113"]
            //     }
            let findProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.userArr.length; i++) {
                findProject.usersInfor.pull(data.userArr[i]);
            }
            let newResult = findProject.save();
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



        return results;
    },
    deleteProjectService: async (id) => {

        let result = await Project.deleteOne({ _id: id });
        return result;
    },
    updateProjectService: async (data) => {
        let result = await Project.updateOne({ _id: data.id }, { ...data });
        return result;
    }

}