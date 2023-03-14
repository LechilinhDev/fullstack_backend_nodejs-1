const { createCustomerService, createManyCustomerService } = require('../services/customerServive');
const { upLoadSingleFile } = require('../services/fileService')
module.exports = {
    postCreateCustomerAPI: async (req, res) => {
        //     name: {
        //         type: String,
        //         require: true
        //     },
        //     address: String,
        //     phone: String,
        //     email: String,
        //     image: String,
        //     description: String
        // }, { timestamps: true });
        let { name, address, phone, email, description } = req.body;
        let imageUrl = "";
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        } else {
            let results = await upLoadSingleFile(req.files.image);

            imageUrl = results.data.path;

        }


        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }

        let result = await createCustomerService(customerData);
        res.status(200).json({
            errorCode: 0,
            data: result
        })
    },
    postCreateCustomersAPI: async (req, res) => {
        let { customers } = req.body;
        let customerData = customers;
        let result = await createManyCustomerService(customerData);
        res.status(200).json({
            errorCode: 0,
            data: result
        })
    }
}