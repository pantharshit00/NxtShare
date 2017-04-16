'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jwtStrategy = jwtStrategy;

var _passportJwt = require('passport-jwt');

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {};
opts.jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeader();
opts.secretOrKey = process.env.SECRET;

function jwtStrategy(passport) {
    passport.use(new _passportJwt.Strategy(opts, function (jwt_payload, done) {
        _user2.default.findOne({
            where: {
                id: jwt_payload.id
            }
        }).then(function (user) {
            if (user == null) done(null, false);else done(null, user);
        }).catch(function (err) {
            return done(err, false);
        });
    }));
}