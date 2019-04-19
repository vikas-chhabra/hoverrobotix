const express = require('express');
const app = express.Router();
const order = require('../controllers/OrderController');

app.post('/',order.postOrder);
app.get('/:userId',order.orderForUser);
app.get('/:orderId',order.toggleOrderStatus);

module.exports = app;