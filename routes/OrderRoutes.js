const express = require('express');
const app = express.Router();
const order = require('../controllers/OrderController');

app.post('/',order.postOrder);

module.exports = app;