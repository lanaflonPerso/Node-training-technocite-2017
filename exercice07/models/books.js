const fs = require('fs');
const promisify = require("es6-promisify");
const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);
let books =null;
module.exports=class BookModel {
    constructor(){
        this.books=null;
        console.log('init book model')
    }
    getAllBooks(){
        return read(`${process.cwd()}/models/books.json`)
    }
    addBook(obj){
        return read(`${process.cwd()}/models/books.json`).then((data)=>{
            var arr = JSON.parse(data)
            arr.push(obj)
            return write(`${process.cwd()}/models/books.json`,JSON.stringify(arr))
        })
        
    }
}
