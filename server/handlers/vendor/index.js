'use strict';

function vendorHandler(request, reply) {
    if (request.params.vendor) {
        return reply.view('vendor', {
            vendor: request.params.vendor
        });
    }
    return reply.view('vendors');
}

module.exports = vendorHandler;
