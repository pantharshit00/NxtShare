'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouterDom = require('react-router-dom');

var _routes = require('../client/components/router/routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/*', function (req, res) {
    var context = {};
    var html = (0, _server.renderToString)(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: context },
        _react2.default.createElement(_routes2.default, null)
    ));
    var helmet = _reactHelmet.Helmet.renderStatic();
    var headData = helmet.title.toString() + ' ' + helmet.meta.toString() + helmet.link.toString();
    console.log(headData);
    if (context.url) {
        res.redirect(context.url);
    } else {
        res.render('index', { html: html, headData: headData });
    }
});

exports.default = router;