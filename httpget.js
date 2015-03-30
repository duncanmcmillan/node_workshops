/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 3/29/15
 * Time: 2:11 AM
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var urlTest = 'http://www.google.com/index.html';
var urlProd = process.argv[2];

http.get(urlProd, function(res) {
    res.setEncoding('utf8');
    res.on('data', onData);
    res.on('error', onError);
    res.on('end', onEnd);
});

function onData(data) {
    console.log(data);
}
function onError() {

}
function onEnd() {

}