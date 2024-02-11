let express = require('express');
let router = express.Router();
const validator = require('express-validator');
let customer = require('../Controller/CustomerAPI')

let validateUniqueMobileNumber = require('../Validators/UniqueMobileValidator');

router.post('/customer/create', [validator.body('Email').isEmail().withMessage('Email is not Correct')],
    (req, res) => {
        const errors = validator.validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            customer.createCustomer;
        }
    })

router.get('/customer/getone/:id', customer.findOne);

router.get('/customer/getall', customer.findAll);

router.put('/customer/update/:id', customer.updateCustomer);

router.delete('/customer/delete/:id', customer.deleteCustomer);

module.exports = router