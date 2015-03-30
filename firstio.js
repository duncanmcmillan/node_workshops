var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2], 'utf8');
//var data = buffer.toString();
var newlineNumber = buffer.split('\n');
console.log(newlineNumber.length-1);



