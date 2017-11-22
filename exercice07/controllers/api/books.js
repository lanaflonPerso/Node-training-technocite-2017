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
                console.log(JSON.parse(formBook))
            })
           
            // book.addBook('values')
            res.setHeader('Content-type', 'application/json')

            res.end();
        default:
            break
    }
}
