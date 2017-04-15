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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

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

router.post('/login', function (req, res) {
    var _req$body = req.body,
        username = _req$body.username,
        password = _req$body.password;

    if (!username || !password) {
        res.json({
            "status": "ok",
            "isAuthenticated": false,
            "error": "Please provide required data"
        });
    } else {
        _user2.default.findOne({
            where: {
                username: username
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

exports.default = router;