import express from 'express';
import morgan from 'morgan';
import React from 'react';
import path from 'path';
import compression from 'compression';
import bodyParser from 'body-parser';

import apiRoutes from './routes/api';
import indexRoutes from './routes/index';
import dbConnection from './config/database';
import User from './models/user';

const app = express();

dbConnection.sync().then(()=>{
    console.log("CONNECTED TO DB");
})

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("common"));
}
else {
    app.use(compression())
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/api', apiRoutes);
app.use('/', indexRoutes);

app.listen(8080, () => {
    console.log("http://localhost:8080")
})