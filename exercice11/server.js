const path = require('path');
const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const glob = require('glob');
const globP = promisify(glob);
"use strict";
const Hapi = require('hapi');

async function initializeDB() {
    mongoose.connect('mongodb://localhost/tvdb', { useMongoClient: true });
    mongoose.Promise = global.Promise;
    mongoose.connection.on('error', err => console.error(err.message))
}
async function initializeRoutes(server) {
    const routes = await globP('api/**/routes/*.js', { root: __dirname });
    routes.map(item => {
        server.route(require(path.join(process.cwd(), item)))
    });
}
async function initializeModels() {
    const models = await globP('./api/**/models/*.js', { root: __dirname });
    models.map(item => require(path.join(process.cwd(), item)));
}
async function init() {
    await initializeDB();
    await initializeModels();
    const server = Hapi.server({ port: 8000 });
    await initializeRoutes(server);
    await server.start();
    // console.log(server.table())
    console.log('Server started at: ' + server.info.uri);
}
init()

