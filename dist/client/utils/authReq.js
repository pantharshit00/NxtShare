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

    function PrivateRoute() {
        _classCallCheck(this, PrivateRoute);

        return _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).apply(this, arguments));
    }

    _createClass(PrivateRoute, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                Component = _props.component,
                user = _props.user,
                rest = _objectWithoutProperties(_props, ['component', 'user']);

            return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
                    return user.isAuthenticated ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                            pathname: '/login?redirect=' + props.location.pathname
                        } });
                } }));
        }
    }]);

    return PrivateRoute;
}(_react2.default.Component)) || _class);
exports.default = PrivateRoute;