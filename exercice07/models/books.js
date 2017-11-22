const fs = require('fs');
const promisify = require("es6-promisify");
const read = promisify(fs.readFile);
let books =null;
module.exports=class BookModel {
    constructor(){
        this.books=null;
        console.log('init book model')
    }
    getAllBooks(){
        return read(`${process.cwd()}/models/books.json`)
    } 
}
