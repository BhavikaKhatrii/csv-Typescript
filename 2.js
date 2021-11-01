//Print out all books and magazines (on either console UI) with all their details (with a meaningful output format).
var csv = require('csv-parser');
var fs = require('fs');
var results = [];
var str = fs.createReadStream('Books.csv')
    .pipe(csv({}))
    .on('data', function (data) { return results.push(data); })
    .on('end', function () {
    console.log(results);
});
