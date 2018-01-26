
var fs = require('fs');

var dirPathString = '../lesson2'

function callback(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }

    if (files.length > 0) {
        console.log(files);
    } else {
        console.log('没有找到任何文件');
    }
}

fs.readdir(  dirPathString, callback);