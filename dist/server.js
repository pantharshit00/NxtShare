'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _morgan2.default)("common"));
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, 'views'));

app.use('/static', _express2.default.static(_path2.default.join(__dirname, 'static')));
app.use('/api', _api2.default);
app.use('/', _index2.default);

app.listen(8080, function () {
    console.log("http://localhost:8080");
});