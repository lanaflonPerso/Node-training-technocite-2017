const fs = require('fs');
module.exports = (req, res) => {
    fs.readFile(`${process.cwd()}/public/error.html`, (err, data) => {
        console.log(err,data)
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('Page not found')
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data.toString('utf8'));

    })
}