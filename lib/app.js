const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

//Middleware
app.use(express.static('public'));
app.use(express.json());

module.exports = app;