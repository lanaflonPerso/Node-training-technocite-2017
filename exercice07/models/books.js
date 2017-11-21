const fs = require('fs');
const promisify = require("es6-promisify");
const read = promisify(fs.readFile);
let books =null;
module.exports=class BookModel {

    constructor(){
        this.books=null;
        console.log('init book model')
        read(`${process.cwd()}/models/books.json`)
        .then((data)=>{
           this.books=( JSON.parse(data.toString())); 
        })
    }
    getAllBooks(){
        return books;
    }
}
