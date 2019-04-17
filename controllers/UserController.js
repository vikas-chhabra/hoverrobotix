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

exports.login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
            email: email,
        })
        .then(user => {
            if (user.length > 1) {
                return res.status(401).json({
                    response: false,
                    msg: 'Auth failed due to some reason please contact backend developer'
                });
            } else if (user.active) {
                bcrypt.compare(password, user.password, function (error, result) {
                    if (error) {
                        return res.status(401).json({
                            success: false,
                            msg: 'Auth failed'
                        });
                    }
                    if (result) {
                        const token = jwt.sign({
                            email: user.email,
                            userId: user._id
                        }, '412i34bkgi241ug34iu1g24iu21giuhbnh2v1i4', {
                            expiresIn: '1d'
                        });
                        return res.status(200).json({
                            response: true,
                            msg: 'Auth successful',
                            token,
                            userDetails:user
                        });
                    } else {
                        res.status(401).json({
                            response: false,
                            msg: 'Auth failed',
                        })
                    }
                })
            } else {
                res.status(401).json({
                    response: false,
                    msg: 'You have been blocked, Please contact customer support',
                })
            }
        })
        .catch(_ => {
            res.status(401).json({
                success: false,
                msg: 'Auth failed'
            })
        })
}

exports.loginVerify=(req,res)=>{
    let token = req.body.token;
    let email = req.body.email;
    
    jwt.verify(token,'412i34bkgi241ug34iu1g24iu21giuhbnh2v1i4',(err,decoded)=>{
        if(err){
            res.status(500).json({
                response:false,
                message:"Something went wrong please try again later"
            })
        }
        else{
            if(decoded.email===email){
                res.status(200).json({
                    response:true,
                    message:"Authentication Successful!"
                })
            }
            else{
                res.status(500).json({
                    response:false,
                    message:"Auth failed"
                })
            }
        }
    })
}

exports.deActivate = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if (user.length > 1) {
                return res.status(401).json({
                    response: false,
                    msg: 'Auth failed'
                });
            } else {
                User.findByIdAndUpdate(req.params.userId, {
                        active: !user.active
                    })
                    .then(_ => {
                        res.status(200).json({
                            response: true,
                            msg: 'User Toggled'
                        });
                    }).catch(_ => {
                        res.status(401).json({
                            response: false,
                            msg: 'User not Found'
                        })
                    })

            }
        })
        .catch(err => {
            res.status(401).json({
                response: false,
                msg: 'Auth failed, Some error occured',
                error:err
            })
        })
}

exports.getSpecificUser=(req,res)=>{
    let userId = req.params.userId;

    User.findById(userId)
    .then((userDetails)=>{
        res.status(200).json({
            response:true,
            userDetails
        })
    })
    .catch(err=>{
        res.status(500).json({
            response:false,
            message:"Something went wrong while fetching the users details from the database",
            error:err
        })
    })
}