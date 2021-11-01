//Write software that reads the CSV data (of books, magazines, and authors) given on the next page.
//import fs from 'fs';
var fs = require('fs');
var author = fs.readFileSync('Authors.csv', {
    encoding: 'utf-8'
});
console.log("\n-----------------------------------Authors's Output------------------------------\n\n", author);
var book = fs.readFileSync('Books.csv', {
    encoding: 'utf-8'
});
console.log("\n\n-----------------------------------Book's Output------------------------------\n\n", book);
var mag = fs.readFileSync('Magazine.csv', {
    encoding: 'utf-8'
});
console.log("\n\n-----------------------------------Magazine's Output------------------------------\n\n", mag);
