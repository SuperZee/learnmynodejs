var util = require('util');
var stream = require('stream');
util.inherits(Duplexer, stream.Duplex);

function Duplexer(opt) {
    stream.Duplex.call(this, opt);
    this.data = [];
}
Duplexer.prototype._read = function readItem(size) {
    var chunk = this.data.shift();// 通过shift来获取此数组的条目
    if (chunk == 'stop') {
        this.push(null);
    } else {
        if (chunk) {
            this.push(chunk);
        } else {
            setTimeout(readItem.bind(this), 500, size);
        }
    }
};
Duplexer.prototype._write = function (data, encoding, callback) {
    this.data.push(data);
    console.log('调用了_write');
    callback();
};


var d = new Duplexer();
d.on('data', function (chunk) {
    console.log('read : ', chunk.toString());
});
d.on('end', function () {
    console.log('File Complete !');
});

d.write('哈哈');
d.write('123');
//d._write('aaa',null,function () {
//})
d.write('dog');
d.write('stop');


