//Find a book or magazine by its ISBN.

var csv = require('csv-parser');
const fs = require('fs')
const output = [];

function query(isbn){
    return `${isbn}`;
}

fs.createReadStream('Books.csv').pipe(csv({}))
.on('data',function(row){
    const id = query(row.isbn);

    const out = {
        
        isbn:row.isbn
    }
    output.push(out)
})
.on('end',()=>{
    console.log(output);
});
