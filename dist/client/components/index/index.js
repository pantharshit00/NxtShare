'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _register_form = require('../register/components/register_form');

var _register_form2 = _interopRequireDefault(_register_form);

var _setAuthorizationHeader = require('../../utils/setAuthorizationHeader');

var _setAuthorizationHeader2 = _interopRequireDefault(_setAuthorizationHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _setAuthorizationHeader2.default)();
            if (typeof window !== "undefined") {
                window.sr.reveal("#animate-container", { origin: 'left', duration: 1200, distance: '1000px' });
                window.sr.reveal("#animate-left", { origin: "right", distance: "500px", delay: 500, duration: 1200 });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Home | NxtShare'
                    ),
                    _react2.default.createElement(
                        'script',
                        null,
                        '$(function(){ $("#text-typed").typed({strings:[\'Level\',\'Thoughts\',\'Mind\',\'Write\',\'Wit\',\'You\',\'Share\'],typeSpeed: 5,backDelay: 1200 })});'
                    ),
                    _react2.default.createElement(
                        'script',
                        null,
                        '$(function(){ $("#para").typed({strings:[\'Have a great idea.\'],typeSpeed: 50,backDelay: 1200 })});'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'card' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { id: 'animate-container', className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-8' },
                                _react2.default.createElement(
                                    'h1',
                                    { style: { fontSize: 56 + 'px' }, className: 'text-center' },
                                    'Nxt',
                                    _react2.default.createElement('span', { id: 'text-typed', className: 'brand-color' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'write-area' },
                                    '//test'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4', id: 'animate-left' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'Join the fame now'
                                ),
                                _react2.default.createElement('hr', null),
                                _react2.default.createElement(_register_form2.default, null)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;