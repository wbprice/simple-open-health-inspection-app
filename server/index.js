'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

const routes = require('./routes');
const registerPlugins = require('./plugins');

server.connection({port: 8080});

routes.forEach((route) => {
    server.route(route);
});

registerPlugins(server);

module.exports = server;
