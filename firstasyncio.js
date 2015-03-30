/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 3/12/15
 * Time: 10:45 PM
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) throw err;

    var newlineNumber = data.split('\n');
    console.log(newlineNumber.length-1);
})