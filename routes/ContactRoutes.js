const express = require('express');
const app = express.Router();

const contact = require('../controllers/ContactFormController');

app.post('/',contact.sendQuery);
app.get('/',contact.getAllContactQuerys);

module.exports = app;