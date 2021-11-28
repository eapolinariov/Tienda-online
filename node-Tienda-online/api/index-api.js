const express = require('express');
const dotenv = require('dotenv');

const user = require('./components/user/routes');

const api = express();
dotenv.config();

api.use('/api/user', user);

api.listen(process.env.API_PORT, () => {
    console.log('API escuchando en puerto', process.env.API_PORT);
});