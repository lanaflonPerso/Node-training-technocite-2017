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
            let formBook='';
            req.on('data',((data)=>{
                formBook+=data;
            }));
            req.on('end',()=>{
                book.addBook(JSON.parse(formBook)).then(()=>{
                    book.getAllBooks()
                    .then((data) => {
                        res.setHeader('Content-type', 'application/json')
                        res.end(JSON.stringify(data.toString('utf8')))
                    })
               })
            })
           
        default:
            break
    }
}
