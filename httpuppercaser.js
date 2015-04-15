/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 4/2/15
 * Time: 8:13 PM
 * To change this template use File | Settings | File Templates.
 */
var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

var server = http.createServer(callback);
server.listen(port);

function callback(request, responce) {
    if (request.method.toLowerCase() == 'post') {
        request.pipe(map({wantStrings: true}, function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(responce);
    } else {
        return responce.end('send me a POST\n');
    }
};





