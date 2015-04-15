/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 3/13/15
 * Time: 3:44 PM
 * To change this template use File | Settings | File Templates.
 */
var path = require('path');
var fs = require('fs');

fs.readdir(process.argv[2], function (err, files) {
    if (err) throw err;
    for (var i=0; i < files.length; i++) {
        var ext = path.extname(files[i]);
        if (ext == '.'+process.argv[3])  {
            console.log(files[i], "\n");
        }
    }
});