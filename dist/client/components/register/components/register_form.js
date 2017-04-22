'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register_form = function (_Component) {
    _inherits(Register_form, _Component);

    function Register_form() {
        _classCallCheck(this, Register_form);

        var _this = _possibleConstructorReturn(this, (Register_form.__proto__ || Object.getPrototypeOf(Register_form)).call(this));

        _this.state = {
            error: '',
            emailError: '',
            passwordError: ''
        };
        return _this;
    }

    _createClass(Register_form, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            [].forEach.call(document.getElementsByTagName("input"), function (el) {
                el.addEventListener("focus", function (e) {
                    _this2.setState({
                        error: '',
                        emailError: '',
                        passwordError: ''
                    });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleSubmit.bind(this) },
                    this.state.error,
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Name'
                        ),
                        _react2.default.createElement('input', { type: 'text', placeholder: 'Name goes here...', className: 'form-control', ref: 'name' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Email'
                        ),
                        _react2.default.createElement('input', { type: 'email', placeholder: 'Email goes here...', className: 'form-control', ref: 'email' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            this.state.emailError
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Password'
                        ),
                        _react2.default.createElement('input', { type: 'password', placeholder: 'Password goes here...', className: 'form-control', ref: 'password' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Confirm Password'
                        ),
                        _react2.default.createElement('input', { type: 'password', placeholder: 'Enter password one more time...', className: 'form-control', ref: 'password2' })
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-danger' },
                        this.state.passwordError
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
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this3 = this;

            e.preventDefault();
            this.refs.submit.value = "Submitting...";
            this.refs.submit.className += " bg-animation";
            var email = this.refs.email.value;
            var name = this.refs.name.value;
            var password = this.refs.password.value;
            var password2 = this.refs.password2.value;

            if (!email || !name || !password || !password2) {
                this.setState({
                    error: _react2.default.createElement(
                        'div',
                        { className: 'alert alert-danger' },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-exclamation-sign', 'aria-hidden': 'true' }),
                        ' \xA0Please Fill in all the Fields'
                    )
                });
                this.refs.submit.value = "Submit";
                this.refs.submit.className = "form-control submit-btn";
            } else if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false) {
                this.setState({
                    emailError: "Email is not valid"
                });
                this.refs.email.value = '';
            } else if (password !== password2) {
                this.setState({
                    passwordError: "Passwords do not match"
                });
                this.refs.password.value = '';
                this.refs.password2.value = '';
                this.refs.submit.value = "Submit";
                this.refs.submit.className = "form-control submit-btn";
            } else if (password.length < 8) {
                this.setState({
                    passwordError: 'Password should be 8 characters long'
                });
                this.refs.password.value = '';
                this.refs.password2.value = '';
                this.refs.submit.value = "Submit";
                this.refs.submit.className = "form-control submit-btn";
            } else {
                _axios2.default.post('/api/register', {
                    name: name,
                    email: email,
                    password: password,
                    password2: password2
                }).then(function (res) {
                    _this3.refs.submit.value = "Submit";
                    _this3.refs.submit.className = "form-control submit-btn";
                    var data = res.data;
                    if (data.registered) {
                        _this3.props.history.push('/login');
                    } else if (data.errField == "email") {
                        _this3.setState({
                            error: _react2.default.createElement(
                                'div',
                                { className: 'alert alert-danger' },
                                data.err
                            ),
                            emailError: "Try other email"
                        });
                        _this3.refs.email.value = '';
                    } else {
                        _this3.setState({ error: _react2.default.createElement(
                                'div',
                                { className: 'alert alert-danger' },
                                data.err
                            ) });
                    }
                }).catch(function (err) {
                    _this3.refs.submit.value = "Submit";
                    _this3.refs.submit.className = "form-control submit-btn";
                    _this3.setState({
                        error: _react2.default.createElement(
                            'div',
                            { className: 'alert alert-danger' },
                            'Something went wrong in the server. Sorry'
                        )
                    });
                });
            }
        }
    }]);

    return Register_form;
}(_react.Component);

Register_form.propTypes = {
    history: _react2.default.PropTypes.object.isRequired
};
exports.default = (0, _reactRouterDom.withRouter)(Register_form);