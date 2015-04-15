/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 4/3/15
 * Time: 11:04 AM
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var port = process.argv[2];
var url = require('url');

var server = http.createServer(callback);
server.listen(port);

function callback(req, res) {
  if (req.method.toLowerCase() == 'get') {
      if (req.url.substring(0,14) == '/api/parsetime') {
          var ret = url.parse(req.url, true);
          var date = new Date(ret.query.iso);
          var data = {
              "hour": date.getHours(),
              "minute": date.getMinutes(),
              "second": date.getSeconds()
          };
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(data));
      }
      if (req.url.substring(0,13) == '/api/unixtime') {
          var ret = url.parse(req.url, true);
          var date = new Date(ret.query.iso);
          var data = {
              "unixtime": date.getTime()
          };
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(data));
      }
  }
};