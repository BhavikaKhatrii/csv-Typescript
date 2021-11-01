//Find a book or magazine by its ISBN.
var csv = require('csv-parser');
var fs = require('fs');
var output = [];
function query(isbn) {
    return "" + isbn;
}
fs.createReadStream('Books.csv').pipe(csv({}))
    .on('data', function (row) {
    var id = query(row.isbn);
    var out = {
        isbn: row.isbn
    };
    output.push(out);
})
    .on('end', function () {
    console.log(output);
});
