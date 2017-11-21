// Declare variables 
const promisify = require("es6-promisify");
const fs = require("fs");

// Convert the stat function 
const read = promisify(fs.readFile);
const stat = promisify(fs.stat)
// Now usable as a promise! 
read("books.json")
.then(function (data) {console.log("Got data", data.toString());})
.catch(function (err) {console.error(err);});

stat("books.json")
.then(function (stat) {console.log("Got data", stat);})
.catch(function (err) {console.error(err);});