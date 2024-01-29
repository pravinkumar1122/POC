const PhoneModel = require('../models/phoneModel');

const PhoneController = {
    getAllPhones: (req, res) => {
        PhoneModel.getAllPhones((error, phones) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                const acceptHeader = req.get('Accept');

                if (acceptHeader && acceptHeader.includes('application/json')) {
                    res.status(200).json(phones);
                } else {
                    res.status(200).render('index', { phones });
                    
                }
            }
        });
    },

    addPhone: (req, res) => {
        const { brand, model, specs } = req.body;
        const phone = { brand, model, specs };

        PhoneModel.addPhone(phone, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log('New phone added:', results);
                res.status(201).json({ message: 'Phone added successfully' });
            }
        });
    },

    deletePhone: (req, res) => {
        const phoneId = req.params.id;

        PhoneModel.deletePhone(phoneId, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log(`Phone with ID ${phoneId} deleted.`, results);
                res.status(204).json({ message: 'Phone deleted successfully' });
            }
        });
    }
};

module.exports = PhoneController;
