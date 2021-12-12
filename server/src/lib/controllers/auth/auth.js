const mongoose = require('mongoose');
const User = require('../../models/users/main_users_model');
const Owner = require('../../models/users/owners_model');
const Player = require('../../models/users/players_model');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');

// const accountSid = 'AC01497a7b2e26b1107add63a3796b07c8';
// const authToken = 'ab2dac19b859780bf3dd2ab7b662fae4';
// const client = require('twilio')(accountSid, authToken);

// signUp controller
exports.signUp = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(422).json(errors.array());
    } // any non-validated error from the routes check methods for phone and password

    else {
        User.find({
            phone_number: req.body.phone_number
        }).exec().then(users => {
            if (users.length > 0) {
                return res.status(409).json({
                    message: 'phone is exists',
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err,
                        });
                    } else {
                        var user = "";
                        console.log(req.body.type_of_user)
                        if (req.body.type_of_user == 'player') {
                            user = new Player({
                                _id: new mongoose.Types.ObjectId(),
                                first_name: req.body.first_name,
                                second_name: req.body.second_name,
                                phone_number: req.body.phone_number,
                                password: hash,
                                actions: true

                            });

                            user.save()
                            .then(() => {
                                res.status(201).json({
                                    message: 'user created successfully !',

                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err,
                                });
                            });
                        } else {
                            user = new Owner({
                                _id: new mongoose.Types.ObjectId(),
                                first_name: req.body.first_name,
                                second_name: req.body.second_name,
                                phone_number: req.body.phone_number,
                                password: hash,
                                auth: false,

                            });

                            user.save()
                            .then(() => {
                                res.status(201).json({
                                    message: 'user created successfully !',

                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err,
                                });
                            });
                        }

                    }
                });
            }
            });
    }
};

// signIn controller
exports.login = (req, res, next) => {
    User.findOne({
        phone_number: req.body.phone_number
    }).exec().then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({
                            phone_number: user.phone_number,
                            userId: user._id,
                        },
                        'secret'
                    );
                    // res.header("auth_token", token).send(token)
                    res.status(200).json({
                        message: 'Auth seccessful',
                        user:user,
                        token: token,
                    });

                } else {
                    res.status(401).json({
                        message: 'password incorrect',
                    });
                }
            });
        } else {
            res.status(401).json({
                message: "your phone number doesn't exist",
            });
        }
    });
};
