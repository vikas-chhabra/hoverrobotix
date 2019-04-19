const AdminUser = require('../models/AdminUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.signUp=(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    if (email && password && username) {
        AdminUser.find({
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
                            const adminUser = new AdminUser({
                                userName: username,
                                email: email,
                                password: hash,
                            });
                            adminUser.save()
                                .then(_ => {
                                    res.status(201).json({
                                        response: true,
                                        message: 'Admin Created successfully!'
                                    });
                                })
                                .catch(error => {
                                    res.status({
                                        response: false,
                                        message: 'Error while creating Admin',
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

    AdminUser.findOne({
            email: email,
        })
        .then(user => {
            if (user.length > 1) {
                return res.status(401).json({
                    response: false,
                    message: 'Auth failed due to some reason please contact backend developer'
                });
            } else {
                bcrypt.compare(password, user.password, function (error, result) {
                    if (error) {
                        return res.status(401).json({
                            success: false,
                            message: 'Auth failed'
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
                            message: 'Auth successful',
                            token,
                            userDetails:user
                        });
                    } else {
                        res.status(401).json({
                            response: false,
                            message: 'Invalid Credentials',
                        })
                    }
                })
            }
        })
        .catch(err => {
            res.status(401).json({
                success: false,
                message: 'Auth failed',
                error:err
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