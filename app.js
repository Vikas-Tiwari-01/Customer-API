const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

let customer=require('./routes')
app.use('/api',customer);


app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});