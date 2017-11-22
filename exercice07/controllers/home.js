const fs = require('fs');
const promisify = require("es6-promisify");
const read = promisify(fs.readFile);
const Model = require(`${process.cwd()}/models/books.js`)
module.exports = (req, res) => {
    let promises = [];
    let templatePromise = read(`${process.cwd()}/views/home.html`);
    let dataPromise = new Model().getAllBooks();
    promises.push(templatePromise, dataPromise);
    Promise.all(promises).then((results) => {
        res.end(results[0].toString('utf8').replace('%books%',
            JSON.parse(results[1].toString('utf8'))
                .map(item => `<b>Title:</b> ${item.name} <b>Author:</b>${item.author}`)
                .join('</li><li>')
        ));
    }).catch(err=>{console.log(err)})
}
