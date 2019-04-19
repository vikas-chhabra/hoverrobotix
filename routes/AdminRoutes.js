const express = require('express');
const app = express.Router();

const admin = require('../controllers/AdminController');

app.post('/',admin.signUp);
app.post('/login',admin.login);
app.post('/loginVerify',admin.loginVerify);

module.exports = app;