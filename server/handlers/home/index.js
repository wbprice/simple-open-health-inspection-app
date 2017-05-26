'use strict';

function homeHandler(request, reply) {
    reply.view('index');
}

module.exports = homeHandler;
