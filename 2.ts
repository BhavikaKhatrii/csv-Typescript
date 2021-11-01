//Print out all books and magazines (on either console UI) with all their details (with a meaningful output format).

const csv = require('csv-parser')
const fs = require('fs')
const results= [];

var str = fs.createReadStream('Books.csv')
.pipe(csv({}))
.on('data',(data)=>results.push(data))
.on('end',()=>{
    console.log(results);
});


