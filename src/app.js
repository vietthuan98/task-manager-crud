import '@babel/polyfill';
require('dotenv').config();
import express from 'express';
import './db/mongoose';

import routes from './router';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log('Server run in port: ' + port);
});
