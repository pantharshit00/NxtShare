'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== "undefined") {
    var ScrollReveal = require("scrollreveal");
}

var Navbar = function (_Component) {
    _inherits(Navbar, _Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (typeof window !== "undefined") {
                window.sr = new ScrollReveal();
                sr.reveal(".navbar", { origin: 'top', duration: 1200, distance: '500px' });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-inverse navbar-fixed-top' },
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' }),
                    _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.7/typed.min.js' }),
                    _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar-header' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
                            _react2.default.createElement(
                                'span',
                                { className: 'sr-only' },
                                'Toggle navigation'
                            ),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'navbar-brand', href: '#' },
                            'Nxt',
                            _react2.default.createElement(
                                'span',
                                { className: 'brand-color' },
                                'Share'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'navbar', className: 'collapse navbar-collapse' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav navbar-nav navbar-right' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: '/', exact: true },
                                    'Home'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: '/login' },
                                    'Login'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: '/register' },
                                    'Register'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
}(_react.Component);

exports.default = Navbar;