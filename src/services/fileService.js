const path = require('path');
const upLoadSingleFile = async (objectFile) => {

    // let uploadPath = 'src/public/images/' + objectFile.name; use static file

    let uploadPath = path.resolve(__dirname, '../public/images/upload/');

    const extname = path.extname(objectFile.name);
    const filename = path.basename(objectFile.name, extname);
    const finalName = `${filename}-${Date.now()}${extname}`;
    const fileUpload = `${uploadPath}/${finalName}`;
    console.log('check Path', fileUpload)

    // Use the mv() method to place the file somewhere on your server
    try {
        await objectFile.mv(fileUpload);
        return {
            errorCode: 0,
            data: {
                status: 'success',
                path: finalName,
                error: null
            }
        }

    } catch (error) {
        return {
            errorCode: 1,
            data: {
                status: 'failed',
                path: null,
                error: error
            }
        }
    }
}




const uploadMultipleFile = async (ObjectFiles) => {

    let uploadPath = path.resolve(__dirname, '../public/images/upload/');

    let countUploadSuccsess = 0;
    let resultsArray = [];

    for (let i = 0; i < ObjectFiles.length; i++) {
        const extname = path.extname(ObjectFiles[i].name);
        const filename = path.basename(ObjectFiles[i].name, extname);
        const finalName = `${filename}-${Date.now()}${extname}`;
        const fileUpload = `${uploadPath}/${finalName}`;
        try {
            await ObjectFiles[i].mv(fileUpload);
            resultsArray.push({
                errorCode: 0,
                data: {
                    status: 'success',
                    path: finalName,
                    error: null
                }
            })
            countUploadSuccsess++;
        } catch (error) {
            resultsArray.push({
                errorCode: 1,
                data: {
                    status: 'failed',
                    path: null,
                    error: error
                }
            })

        }
    }

    return {
        countUploadSuccsess: countUploadSuccsess,
        detail: resultsArray
    }
}

module.exports = {
    upLoadSingleFile, uploadMultipleFile
}