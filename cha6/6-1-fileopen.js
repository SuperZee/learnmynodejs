var fs = require('fs');

/*
异步打开和关闭
 */
fs.open('cha6/6-1-fileopen.js','r',(err,fd) =>{
    console.log('打开文件成功')
    if(!err){
        console.log('文件关闭');
        fs.close(fd);
    }
});

/*
同步打开和关闭
 */
var fd = fs.openSync('cha6/6-1-fileopen.js','r');
fs.close(fd);