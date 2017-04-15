import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/components/router/routes';
import { Helmet } from 'react-helmet';

const router = express.Router();

router.get('/*', (req, res) => {
    const context = {}
    const html = renderToString(<StaticRouter location={req.url} context={context}>
        <Routes />
    </StaticRouter>
    );
    const helmet = Helmet.renderStatic();
    const headData = `${helmet.title.toString()} ${helmet.meta.toString()}${helmet.script.toString()}${helmet.link.toString()}`;
    if (context.url) {
        res.redirect(context.url);
    }
    else {
        res.render('index', { html , headData});
    }
});

export default router;
