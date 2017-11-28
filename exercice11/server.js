
const Hapi = require('hapi');
const getSeriesRoute = require('./api/series/routes/getSeries')
async function init() {
    const server = Hapi.server({ port: 8000 });
    server.route(getSeriesRoute);
    await server.start();
    console.log('Server started at: ' + server.info.uri);
}
init()

