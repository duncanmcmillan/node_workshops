/**
 * Created by WebStorm.
 * User: Duncan McMillan
 * Date: 3/29/15
 * Time: 3:04 AM
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var bl = require('bl');
var callbackCount = 0;
var data1, data2, data3;

// This needs refactoring !!

http.get(process.argv[2], function(res) {
    res.pipe(bl( callback2 ));
});
http.get(process.argv[3], function(res) {
    res.pipe(bl( callback3 ));
});
http.get(process.argv[4], function(res) {
    res.pipe(bl( callback4 ));
});

function callback2(err, data) {
    if (err) throw err;
    callbackCount++;
    data1 = data;
    if (callbackCount == 3) {
        print();
    }
}
function callback3(err, data) {
    if (err) throw err;
    callbackCount++;
    data2 = data;
    if (callbackCount == 3) {
        print();
    }
}
function callback4(err, data) {
    if (err) throw err;
    callbackCount++;
    data3 = data;
    if (callbackCount == 3) {
        print();
    }
}


function print() {
    console.log(data1.toString());
    console.log(data2.toString());
    console.log(data3.toString());
}