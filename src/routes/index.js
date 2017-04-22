import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/components/router/routes';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import store from '../client/redux/store';


const router = express.Router();

router.get('/*', (req, res) => {
    const context = {}
    const html = renderToStaticMarkup(<Provider store={store}><StaticRouter location={req.url} context={context}>
        <Routes />
    </StaticRouter>
    </Provider>
    );
    const helmet = Helmet.renderStatic();
    const headData = `${helmet.title.toString()} ${helmet.meta.toString()}${helmet.script.toString()}${helmet.link.toString()}`;

    res.render('index', { html, headData });
});

export default router;
