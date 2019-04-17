const express = require('express');
const app = express.Router();
const user = require('../controllers/UserController');

app.get('/',user.getAllUsers);
app.post('/login',user.login);
app.post('/signup',user.signUp);
app.post('/loginVerify',user.loginVerify);
// app.post('/:userId',user.deActivate);

module.exports = app;