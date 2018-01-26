var fs = require('fs');
var dirPathString = '../lesson5';
var filePathString = "./write_file_async.txt";

function callback(err) {
    if (err) {
        console.log('读取文件失败');
    }
    else {
        console.log('写文件成功');
    }
}
function callback2(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }
    if (files.length > 0) {
        fs.writeFile(filePathString, files, callback, );
    } else {
        console.log('没有找到任何文件');
    }
}
fs.readdir(dirPathString, callback2);


