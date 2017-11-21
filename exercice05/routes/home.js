const fs = require('fs');
module.exports = (req, res) => {
    fs.readFile(`${process.cwd()}/public/books.json`, (err, json) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('The server has a problem please try later')
        }
        fs.readFile(`${process.cwd()}/public/home.html`, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.end('Page not found')
            }
            res.writeHead(200, { 'Content-Type': 'text/html' })
            console.log(data)
            res.end(generateHtml(data, json));
        })
    })
}
function generateHtml(tpl,json){   
    return tpl.toString('utf8')
    .replace('%books%',
        JSON.parse(json)
        .map(item =>item.name)
        .join('</li><li>')
    );
}