// JavaScriptu不擅长处理二进制数据

// 二进制数据对于处理图像，压缩文件非常有用

// 创建缓冲区
var buf1 = new Buffer(100); // 位数
var buf2 = new Buffer([1, 2, 3]); //数组创建
var buf3 = new Buffer('一个字符串', 'utf8'); // 字符串加编码格式 默认utf-8
console.log(buf1);
console.log(buf2);
console.log(buf3.toString());

buf4 = new Buffer(100).fill(0);
console.log(buf4);
// 写入缓存区数据
buf4.write('add some text');
// 读取缓存区数据
console.log(buf4.toString());