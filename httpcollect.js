/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 3/29/15
 * Time: 2:43 AM
 * To change this template use File | Settings | File Templates.
 */
var bl = require('bl');
var http = require('http');

var urlProd = process.argv[2];
var urlTest = 'http://www.google.com/index.html';

http.get(urlProd, function(res) {
    res.pipe(bl( blCallback ));
})

function blCallback(err, data) {
    if (err) throw err;

    console.log(data.length);
    console.log(data.toString());
}