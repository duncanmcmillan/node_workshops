/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 3/28/15
 * Time: 3:51 AM
 * To change this template use File | Settings | File Templates.
 */
var path = require('path');
var fs = require('fs');

module.exports = function (dirName, ext , callback) {
    var filteredFiles = [];
    fs.readdir(dirName, function(err, data) {
        if (err) {
            return callback(err);
        } else {
            for (var i=0; i < data.length; i++) {
                if (path.extname(data[i])  === '.' + ext) {
                    filteredFiles.push(data[i]);
                }
            }
            return callback(null, filteredFiles);
        }
    });
};
