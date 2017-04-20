'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login_form = function (_Component) {
    _inherits(Login_form, _Component);

    function Login_form(props) {
        _classCallCheck(this, Login_form);

        var _this = _possibleConstructorReturn(this, (Login_form.__proto__ || Object.getPrototypeOf(Login_form)).call(this, props));

        _this.state = {
            mainError: ''
        };
        return _this;
    }

    _createClass(Login_form, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.refs.username.onfocus = function () {
                _this2.setState({
                    mainError: ''
                });
            };
            this.refs.password.onfocus = function () {
                _this2.setState({
                    mainError: ''
                });
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.mainError,
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleFormSubmit.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Email'
                            )
                        ),
                        _react2.default.createElement('input', { autoFocus: true, ref: 'username', type: 'email', placeholder: 'Email goes here...', className: 'form-control' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Password'
                            )
                        ),
                        _react2.default.createElement('input', { ref: 'password', type: 'password', placeholder: 'Password goes here...', className: 'form-control' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement('input', { ref: 'submit', type: 'submit', value: 'Submit', className: 'form-control submit-btn' })
                    )
                )
            );
        }
    }, {
        key: 'handleFormSubmit',
        value: function handleFormSubmit(e) {
            var _this3 = this;

            e.preventDefault();
            this.refs.submit.value = "Submitting...";
            this.refs.submit.className += " bg-animation";
            var username = this.refs.username.value;
            var password = this.refs.password.value;
            if (!username || !password) {
                this.refs.submit.value = "Submit";
                this.refs.submit.className = "form-control submit-btn";
                this.setState({
                    mainError: _react2.default.createElement(
                        'div',
                        { className: 'alert alert-danger' },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-exclamation-sign', 'aria-hidden': 'true' }),
                        ' \xA0Please Fill in all the Fields'
                    )
                });
            } else {
                _axios2.default.post('/api/login', {
                    email: username,
                    password: password
                }).then(function (res) {
                    _this3.refs.submit.value = "Submit";
                    _this3.refs.submit.className = "form-control submit-btn";
                    var data = res.data;
                    if (data.status !== "ok") {
                        _this3.setState({
                            mainError: _react2.default.createElement(
                                'div',
                                { className: 'alert alert-danger' },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-exclamation-sign', 'aria-hidden': 'true' }),
                                ' \xA0Something went wrong in the server. Sorry'
                            )
                        });
                    } else {
                        if (!data.isAuthenticated) {
                            _this3.refs.username.value = '';
                            _this3.refs.password.value = '';
                            _this3.setState({
                                mainError: _react2.default.createElement(
                                    'div',
                                    { className: 'alert alert-danger' },
                                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-exclamation-sign', 'aria-hidden': 'true' }),
                                    ' \xA0',
                                    data.error
                                )
                            });
                        } else {
                            window.localStorage.setItem("jwt_token", data.token);
                            _this3.props.history.push('/');
                        }
                    }
                }).catch(function (err) {
                    _this3.refs.submit.value = "Submit";
                    _this3.refs.submit.className = "form-control submit-btn";
                    _this3.setState({
                        mainError: _react2.default.createElement(
                            'div',
                            { className: 'alert alert-danger' },
                            _react2.default.createElement('span', { className: 'glyphicon glyphicon-exclamation-sign', 'aria-hidden': 'true' }),
                            ' \xA0Something went wrong in the server. Sorry'
                        )
                    });
                });
            }
        }
    }]);

    return Login_form;
}(_react.Component);

Login_form.propTypes = {
    history: _react2.default.PropTypes.object.isRequired
};
exports.default = (0, _reactRouter.withRouter)(Login_form);