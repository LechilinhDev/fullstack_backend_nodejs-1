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
    }
}