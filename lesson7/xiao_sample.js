var fs = require('fs')
var dirPathString = '/Users/胡永/work/testwcyssd/lesson7'
var filePathString = './result.txt'
fs.readdir(dirPathString, function (err, obj) {
console.dir(obj);
    return 'obj'
})
var result = fs.readdir()
fs.writeFile(filePathString, result);
