'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
    isAuthenticated: false,
    userData: null
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'AUTH_SUCCESS':
            {
                return state = _extends({}, state, { isAuthenticated: action.payload.auth, userData: action.payload.userData });
                break;
            }
        default:
            {
                return state;
            }
    }
};