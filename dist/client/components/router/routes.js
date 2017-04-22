'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _authReq = require('../../utils/authReq');

var _authReq2 = _interopRequireDefault(_authReq);

var _index = require('../index/index');

var _index2 = _interopRequireDefault(_index);

var _login = require('../login/login');

var _login2 = _interopRequireDefault(_login);

var _navbar = require('../navbar/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _register = require('../register/register');

var _register2 = _interopRequireDefault(_register);

var _home = require('../home/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_Component) {
    _inherits(Routes, _Component);

    function Routes() {
        _classCallCheck(this, Routes);

        return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
    }

    _createClass(Routes, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _index2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _login2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/register', component: _register2.default }),
                    _react2.default.createElement(_authReq2.default, { exact: true, path: '/home', component: _home2.default })
                )
            );
        }
    }]);

    return Routes;
}(_react.Component);

exports.default = Routes;