let connection = require('../DbConnection');

let createCustomer = (req, res) => {
    try {
        console.log(req.body)
        let customerDetails = req.body
        let insertDataQuery = "insert into customer set ?";
        connection.query(insertDataQuery, customerDetails, () => {
            return res.json({
                status: true,
                message: 'Customer Created Successfully'
            })
        });

    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        })
    }

}

let findOne = (req, res) => {
    try {
        let customerId = req.params.id
        let fetchSingleRecordQuery = 'select * from customer where Id=?'
        connection.query(fetchSingleRecordQuery, customerId, (error, results) => {
            return res.json({
                status: true,
                data: results
            })
        })
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        })
    }

}


let findAll = (req, res) => {
    try {
        let fetchAllRecordQuery = 'select * from customer'
        connection.query(fetchAllRecordQuery, (error, results) => {
            return res.json({
                status: true,
                data: results
            })
        })
    }
    catch (error) {
        return res.json({
            status: false,
            message: error.message
        })
    }

};


let updateCustomer = (req, res) => {
    try {
        let payload = [req.body.Name, req.body.Email, req.body.Mobile, req.body.Address, req.params.id]
        let updateCustomerQuery = 'UPDATE customer SET Name=?, Email=?, Mobile=?, Address=? where Id=?';
        connection.query(updateCustomerQuery,
            payload,
            (error, results) => {
                return res.json({
                    status: true,
                    affectedRows: results.affectedRows
                })
            })
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        })
    }
};


let deleteCustomer = (req, res) => {
    try {
        let customerId = req.params.id
        let deleteSingleRecordQuery = 'delete from customer where Id=?'
        connection.query(deleteSingleRecordQuery, customerId, (error, results) => {
            return res.json({
                status: true,
                affectedRows: results.affectedRows,
                message: 'Deleted 1 Record'
            })
        })
    } catch (error) {

    }
}


module.exports = { createCustomer, findOne, findAll, updateCustomer, deleteCustomer }