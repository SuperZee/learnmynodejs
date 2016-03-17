// 使用Stream模块传送数据
// 数据流 ，可读可写 提供数据从一个地方到另一个地方的通用机制

//Readable流,
var stream = require('stream');
var util = require('util');
util.inherits(Answers,stream.Readable);
function Answers(opt) {
    stream.Readable.call(this, opt);
    this.quotes = ["yes", "no", 'maybe'];
    this._index = 0;
}

Answers.prototype._read = function () {
    if (this._index > this.quotes.length) {
        this.push(null);
    } else {
        this.push(this.quotes[this._index]);
        this._index += 1;
    }
};

var r = new Answers();
// 方式 1：直接读取
console.log("Direct read :" + r.read());
// 方式 2：监听data事件 一次性读取完毕
r.on('data', function (data) {
    console.log("Callback read:" + data);
});

r.on('readable',()=>{
    console.log('还有数据');
});

// 监听读取结束事件
r.on('end', function (data) {
    console.log("No more answers");
});
// 监听错误事件
r.on('error', ()=>{
    console.log("读取出错了");
});
// 监听关闭事件
r.on('close', () =>{
    console.log("流管波完毕")
});