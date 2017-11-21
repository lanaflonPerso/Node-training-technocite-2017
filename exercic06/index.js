const filePromise = require('./readFilePromise');
filePromise.readFile('./books.json')
.then((data)=>{
    console.log(data.toString())})
.catch((err)=>{
    console.log(err)
})

