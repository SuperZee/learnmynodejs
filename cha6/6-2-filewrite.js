var fs = require('fs');

/**
 * 异步文件写入
 * @type {{name: string, port: number}}
 */
var url = {'name' : 'localhost',
            'port' : 8080};
var data = JSON.stringify(url);
fs.writeFile('cha6/writeFile.json', data, 'utf8', function () {
    console.log('写入完成');
});

/**
 *同步文件写入
 */
var config = '{"dbname" : "mongodb" , ' +
    '"username" : "admin" , ' +
    '"password" : "123456"}';
fd = fs.writeFileSync('cha6/writeFileBySync.json',config,'utf-8');

