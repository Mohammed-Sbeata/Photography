require('dotenv').config();

const { join } = require('path');
const express = require('express');

const app = express();
const router = require('./router');


app.set('port', process.env.PORT || 8000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
