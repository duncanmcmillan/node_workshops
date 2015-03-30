/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 3/28/15
 * Time: 3:57 AM
 * To change this template use File | Settings | File Templates.
 */
var mymodule = require('./myModule');

mymodule(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        console.log('Error ' , err);
    } else {
        data.forEach(function (file) {
            console.log(file);
        })
    }
});


