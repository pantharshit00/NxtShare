'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../config/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _database2.default.define('users', {
    id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: _sequelize2.default.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: _sequelize2.default.TEXT,
        allowNull: false
    }
});

exports.default = User;