/* eslint no-console: off */
const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/util/connect');

//This env name "PORT" will be used for Heroku
const PORT = process.env.PORT || 3000;

//This env name "MONGODB_URI" will be used by Heroku when mLab is implemented
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auto-search';

connect(MONGODB_URI);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Server running on', server.address().port);
});