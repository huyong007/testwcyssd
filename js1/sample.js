var fs= require('fs');
var dirPathString='../../../../';
var filePathString='../ros.js/allFilesName.txt';

var files=fs.readdirSync(dirPathString);
function callback(err){
    if(err){
        console.log('写文件失败');
    }else{
        console.log('写文件成功');
    }
}
fs.writeFileSync(filePathString,files,callback());


