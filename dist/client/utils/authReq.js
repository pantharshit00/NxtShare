'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _reactRouterDom = require('react-router-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _setAuthorizationHeader = require('./setAuthorizationHeader');

var _setAuthorizationHeader2 = _interopRequireDefault(_setAuthorizationHeader);

var _user = require('../redux/actions/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrivateRoute = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        user: state.user
    };
}), _dec(_class = function (_React$Component) {
    _inherits(PrivateRoute, _React$Component);

    function PrivateRoute(props) {
        _classCallCheck(this, PrivateRoute);

        var _this = _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).call(this, props));

        _this.state = {
            auth: _this.props.user.isAuthenticated
        };
        return _this;
    }

    _createClass(PrivateRoute, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                if (typeof window.localStorage.jwt_token !== "undefined") this.setState({
                    auth: true
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                Component = _props.component,
                rest = _objectWithoutProperties(_props, ['component']);

            var route = _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { component: Component }));
            var path = '/login?redirect=' + this.props.path;
            var red = _react2.default.createElement(_reactRouterDom.Redirect, { to: path });
            return _react2.default.createElement(
                'div',
                null,
                this.state.auth && route,
                !this.state.auth && red
            );
        }
    }]);

    return PrivateRoute;
}(_react2.default.Component)) || _class);
exports.default = PrivateRoute;