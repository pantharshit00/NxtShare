import express from 'express';
import morgan from 'morgan';
import React from 'react';
import path from 'path';

import apiRoutes from './routes/api';
import indexRoutes from './routes/index';

const app = express();

app.use(morgan("common"));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/static',express.static(path.join(__dirname,'static')));
app.use('/api', apiRoutes);
app.use('/',indexRoutes);

app.listen(8080,()=>{
    console.log("http://localhost:8080")
})