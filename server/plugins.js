'use strict';

const Hoek = require('hoek');
const path = require('path');

function registerPlugins(server) {
    server.register([{
        register: require('vision')
    }, {
        register: require('inert')
    }], function handleRegistration(err) {
        Hoek.assert(!err, 'There was an error registering the plugins');

        server.views({
            engines: {
                html: require('handlebars')
            },
            path: 'templates',
            helpersPath: 'helpers',
            partialsPath: 'partials',
            relativeTo: path.join(__dirname, 'views'),
        });
    })
}

module.exports = registerPlugins;
