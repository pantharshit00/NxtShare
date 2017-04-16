'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passport3 = require('../config/passport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(_passport2.default.initialize());
router.use(_passport2.default.session());
(0, _passport3.jwtStrategy)(_passport2.default);

function hashPassword(password) {
    var salt = _crypto2.default.randomBytes(16).toString('hex');
    var hash = _crypto2.default.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
    return [salt, hash].join("$");
}

function compareHash(string, original) {
    var originalHash = original.split("$");
    var hash = _crypto2.default.pbkdf2Sync(string, originalHash[0], 2048, 32, 'sha512').toString('hex');
    if (originalHash[1] == hash) return true;else return false;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

router.post('/login', function (req, res) {
    var _req$body = req.body,
        email = _req$body.email,
        password = _req$body.password;

    if (!email || !password) {
        res.json({
            "status": "ok",
            "isAuthenticated": false,
            "error": "Please provide required data"
        });
    } else {
        _user2.default.findOne({
            where: {
                email: email
            }
        }).then(function (user) {
            if (user == null) {
                res.json({
                    "status": "ok",
                    "isAuthenticated": false,
                    "error": "Username/Password is incorrect"
                });
            } else {
                if (!compareHash(password, user.password)) {
                    res.json({
                        "status": "ok",
                        "isAuthenticated": false,
                        "error": "Username/Password is incorrect"
                    });
                } else {
                    var token = _jsonwebtoken2.default.sign({ id: user.id }, process.env.secret, { expiresIn: 2592000 });
                    res.json({
                        "status": "ok",
                        "isAuthenticated": true,
                        token: token
                    });
                }
            }
        }).catch(function (err) {
            return res.json({ "status": "no" });
        });
    }
});

router.post('/register', function (req, res) {
    console.log(req.body);
    var _req$body2 = req.body,
        name = _req$body2.name,
        email = _req$body2.email,
        password = _req$body2.password,
        password2 = _req$body2.password2;

    if (!name || !email || !password || !password2 || password !== password2 || !validateEmail(email)) {
        res.status(403).json({
            registered: false,
            err: "Bad Data",
            errField: "all"
        });
    } else {
        _user2.default.findOne({
            where: {
                email: email
            }
        }).then(function (user) {
            if (user !== null) {
                res.json({
                    registered: false,
                    err: "Email already in user",
                    errField: "email"
                });
            } else {
                var newUser = {
                    name: name,
                    email: email,
                    password: hashPassword(password)
                };
                _user2.default.create(newUser).then(function () {
                    res.json({
                        registered: true,
                        err: null,
                        errField: null
                    });
                }).catch(function (err) {
                    return res.json({
                        registered: false,
                        err: err,
                        errField: "unknown"
                    });
                });
            }
        });
    }
});

exports.default = router;