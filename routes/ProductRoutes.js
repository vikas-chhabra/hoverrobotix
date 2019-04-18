const express = require('express');
const app = express.Router();
const product = require('../controllers/ProcuctController');

app.get('/',product.getAllProducts);

module.exports = app;