const http = require('http');
const routes = [
    { url: '/', controller: 'home' },
    { url: '/about', controller: 'about' },
]
function router(req, res) {
    let route = routes.findIndex((item) => item.url === req.url)
    console.log(route)
    if (route !== -1) {
        require('./routes/' + routes[route].controller)(req, res)
    }
    else {
        require('./routes/error')(req, res)
    }
}
http.createServer(router).listen(8000)