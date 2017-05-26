'use strict';

const path = require('path');

function handleAssets(request, reply) {
    debugger;
    reply.file(path.join(__dirname, '..', '..', 'assets', request.params.file));
}

module.exports = handleAssets;
