import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Routes from './components/router/routes';

const target = document.getElementById("root");

render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    target
);

