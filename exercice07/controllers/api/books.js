const Model = require(`${process.cwd()}/models/books.js`)
module.exports = (req, res) => {
    let book = new Model();
    switch (req.method) {
        case 'GET':
            book.getAllBooks()
                .then((data) => {
                    res.setHeader('Content-type', 'application/json')
                    res.end(JSON.stringify(data.toString('utf8')))
                })

            break;
            case 'POST':
            console.log('post an the way')
            res.end();
        default:
            break
    }
}
