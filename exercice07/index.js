const http = require('http');
const routes = [
    {url:'/', controller:'home'},
    {url:'/api/books', controller:'api/books'},
];

const routeManager = (req, res)=>{
    let route = routes.findIndex((item) => item.url === req.url)
    if (route !== -1) {
        require('./controllers/' + routes[route].controller)(req, res)
    }
}

http.createServer(routeManager).listen(8000);