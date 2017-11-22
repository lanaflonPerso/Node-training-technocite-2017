const Model = require(`${process.cwd()}/models/books.js`)
module.exports = (req, res) => {
    let book =  new Model();
    book.getAllBooks()
    .then((data)=>{
        res.setHeader('Content-type','application/json')
        res.end(JSON.stringify(data.toString('utf8')))   })
}
