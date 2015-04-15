/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 4/2/15
 * Time: 7:50 PM
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(callback);

server.listen(port);

function callback(request, responce) {
    var stream = fs.createReadStream(fileLocation);

    stream.pipe(responce);
};