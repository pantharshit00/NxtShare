import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../sass_files/style.scss';

import store from './redux/store';

import Routes from './components/router/routes';

const target = document.getElementById("root");

render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    target
);
