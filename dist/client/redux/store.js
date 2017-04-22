'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _root = require('./reducers/root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = {};
if (typeof window !== "undefined") {
  store = (0, _redux.createStore)(_root2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
} else {
  store = (0, _redux.createStore)(_root2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

exports.default = store;