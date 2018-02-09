
var fs = require('fs');
var jsonfile = require('jsonfile');
var pathString = '/Users/胡永/work/sample/study/lesson7/';
var writePathString = './all_words.json';
var errorPathString = './error_data.json';
fs.readdir(pathString,
    function (err, files) {
        if (err) {
            console.log('读取文件失败');
            return;
        }
        var jsonFiles = [];
        for (var i = 0; i < files.length; i++) {
            if (files[i].includes('.md')) {
                jsonFiles.push(files[i]);
            }
        }
        var jsonList = [];
        var errorFiles = [];
        for (var i = 0; i < jsonFiles.length; i++) {
            try {
                var content = jsonfile.readFileSync(pathSting + jsonFiles[i]);
                jsonList.push(jsonFiles[i]);
            } catch (err) {
                errorFiles.push(jsonFiles[i]);

            }
        }
        jsonfile.writeFileSync(writePathString, jsonList);
        jsonfile.writeFileSync(errorPathString, errorFiles);

    });