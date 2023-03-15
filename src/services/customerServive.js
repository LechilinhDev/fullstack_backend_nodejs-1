const Customer = require('../models/customer');

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
    getAllCustomerService: async () => {
        try {
            let data = await Customer.find({});
            return data;
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
        let data = await Customer.delete({ _id: id });
        return data;
    }
}