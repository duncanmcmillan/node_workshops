/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 4/1/15
 * Time: 1:04 PM
 * To change this template use File | Settings | File Templates.
 */
var net = require('net');
var formatDate = require('strftime');

var server = net.createServer(callback);
var port = process.argv[2];

server.listen(port);

function callback(socket) {
    //Create the time and date data
    var date = new Date();
    date = formatDate('%F %R', date);
    socket.write(date);
    socket.end();
};

