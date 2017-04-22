'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login_user = login_user;
function login_user(userData) {
    return {
        type: 'AUTH_SUCCESS',
        payload: {
            auth: true,
            userData: userData
        }
    };
}