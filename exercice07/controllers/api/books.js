const fs = require('fs');
const Model = require(`${process.cwd()}/models/books.js`)
module.exports = (req, res) => {
    let book =  new Model();
    console.log(book.getAllBooks())
    console.log(req.url)
}
