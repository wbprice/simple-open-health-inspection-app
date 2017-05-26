'use strict';

const routes = [{
    path: '/',
    method: 'GET',
    handler: require('./handlers/home/')
}, {
    path: '/vendor/{vendor?}',
    method: 'GET',
    handler: require('./handlers/vendor/')
}, {
    path: '/assets/{file*}',
    method: 'GET',
    handler: require('./handlers/assets')
}];

module.exports = routes;
