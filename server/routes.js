'use strict';

const homeHandler = require('./handlers/home/');
const vendorHandler = require('./handlers/vendor/');
const assetsHandler = require('./handlers/assets/');

const routes = [{
    path: '/',
    method: 'GET',
    handler: homeHandler
}, {
    path: '/vendor',
    method: 'GET',
    handler: vendorHandler
}, {
    path: '/assets/{file*}',
    method: 'GET',
    handler: assetsHandler
}];

module.exports = routes;
