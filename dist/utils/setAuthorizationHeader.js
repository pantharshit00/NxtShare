"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    if (typeof window !== "undefined") {
        window.axios = _axios2.default;
        if (window.localStorage.jwt_token) {
            return _axios2.default.defaults.headers.common["Authorization"] = "JWT " + window.localStorage.jwt_token;
        } else {
            return delete _axios2.default.defaults.headers.common["Authorization"];
        }
    }
};

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }