let connection = require('../DbConnection');

let validateUniqueMobileNumber = (req, res) => {
    try {
        console.log(req.body.Mobile)
        let mobileNumber = req.body.Mobile;
        let fetchSingleRecordQuery = 'select * from customer where Mobile=?'
        connection.query(fetchSingleRecordQuery, mobileNumber, (error, results) => {
            if (results.length > 0) {
                return res.status(400).send('Mobile number already exists')
            }
            else {
                return res.status(200).send(error);
            }
        })
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        })
    }
}

module.exports = { validateUniqueMobileNumber };