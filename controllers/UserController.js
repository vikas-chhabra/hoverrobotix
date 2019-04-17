const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then(users => {
            res.status(200).json({
                response: true,
                msg: "Users Retrieved",
                users
            })
        })
        .catch(err => {
            res.status(500).json({
                response: false,
                msg: "Something went wrong while finding the users from the database",
                error: err
            })
        })
}

exports.signUp = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    if (email && password && username) {
        User.find({
                email: email
            })
            .then((users) => {
                if (users.length >= 1) {
                    res.status(409).json({
                        response: false,
                        message: 'Email Already exists'
                    })
                } else {
                    bcrypt.hash(password, 12, (error, hash) => {
                        if (error) {
                            return res.status(422).json({
                                response: false,
                                error
                            });
                        } else {
                            const user = new User({
                                userName: username,
                                email: email,
                                password: hash
                            });
                            user.save()
                                .then(_ => {
                                    res.status(201).json({
                                        response: true,
                                        msg: 'User Created successfully!'
                                    });
                                })
                                .catch(error => {
                                    res.status({
                                        success: false,
                                        msg: 'Error while creating user',
                                        error
                                    });
                                });
                        }
                    })
                }
            })
    } else {
        res.status(404).json({
            response: false,
            message: 'Some field is missing while signing up'
        })
    }
}