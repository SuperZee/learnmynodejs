// 简单的文件复制
var fs = require('fs');

//var source = fs.readFileSync('cha5/5-1-JSON.js',{encoding:'utf8'});
//
//fs.writeFileSync('./copy',source,{encoding:'utf8'});


// 使用流来实现文件复制
//var readStream = fs.createReadStream('cha5/5-1-JSON.js');
//var writeStream = fs.createWriteStream('cha5/5-1-JSON.js1');
//// 当有数据的时候写入数据
//readStream.on('data', (data) => {
//    writeStream.write(data);
//});
//
//readStream.on('error', () => {
//    console.log('读写文件出错');
//});
//
//// 当没有数据流入的时候关闭流
//readStream.on('end', ()=> {
//    writeStream.end();
//});

// 上面的程序有个问题，如果写入的速度跟不上读取的速度就会造成数据丢失

var readStream = fs.createReadStream('cha5/5-1-JSON.js');
var writeStream = fs.createWriteStream('cha5/5-1-JSON.js1');
readStream.on('data',(data) =>{ //当有数据流入的时候，写入数据
    if(writeStream.write(data) === false){ // 如果没有写完，暂停读取数据
        readStream.pause();
    }
});
writeStream.on('drain', () => { // 写完后继续读取
    readStream.resume();
});
readStream.on('end', ()=>{ //当没有数据流的时候关闭数据
    writeStream.end();
})
