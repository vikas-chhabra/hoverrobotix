const express = require('express');
const app = express.Router();
const user = require('../controllers/UserController');

app.get('/',user.getAllUsers);
app.post('/login',user.login);
app.post('/signup',user.signUp);
app.post('/loginVerify',user.loginVerify);
app.delete('/:userId',user.deActivate);
app.get('/:userId',user.getSpecificUser);
app.post('/address',user.saveAddress);
app.patch('/count',user.countUsers);

module.exports = app;