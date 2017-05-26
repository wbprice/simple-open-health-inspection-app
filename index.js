'use strict';

const server = require('./server/');

server.start((err) => {
    console.log('Listening on port 8080');
});
