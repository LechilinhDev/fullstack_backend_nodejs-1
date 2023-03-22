const Customer = require('../models/customer');
const aqp = require('api-query-params');

module.exports = {
    createCustomerService: async (customerData) => {
        // name: {
        //     type: String,
        //     require: true
        // },
        // address: String,
        // phone: String,
        // email: String,
        // image: String,
        // description: String
        const { name, address, phone, email, description, image } = customerData;
        try {

            let results = await Customer.create({
                name, address, phone, email, description, image
            })
            return results;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    createManyCustomerService: async (customerData) => {

        try {
            let results = await Customer.insertMany(customerData);
            return results
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    getAllCustomerService: async (req, res) => {
        try {
            let results = null;
            const { filter, limit, projection } = aqp(req.query);
            console.log('check query', aqp(req.query))
            if (req.query) {
                let offset = (projection - 1) * limit;
                console.log('check offset', offset)

                results = await Customer.find(filter).skip(offset).limit(limit).exec();



            } else {
                results = await Customer.find({});
            }

            return results;
        } catch (error) {
            console.log('error get all user', error);
            return null
        }

    },
    updateCustomerById: async (dataCustomer) => {
        let { id, name, address, phone, email, description } = dataCustomer;
        let data = await Customer.updateOne({ _id: id }, { name, address, phone, email, description });
        return data;
    },
    deleteACustomer: async (id) => {
        let data = await Customer.deleteById({ _id: id });
        return data;
    },
    deleteManyService: async (arrId) => {
        try {
            let data = await Customer.delete({ _id: { $in: arrId } });
            return data
        } catch (error) {
            return null
        }


    }
}