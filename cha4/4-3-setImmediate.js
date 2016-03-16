// 即时计时器，
// 在任何超时时间或者时间间隔时间被执行前执行

var fs = require('fs');             // path , callback
fs.stat("cha4/4-2-setInterval.js", function (err, stats) {
    if (stats) {
        console.log("nexttick.js Exists");
    }
});

setImmediate(function () {
    console.log("Immediate Timer 1 Executed");
});

setImmediate(function () {
    console.log("Immediate Timer 2 Executed");
});

process.nextTick(function () {
    console.log("Next Tick 1 Executed");
});

process.nextTick(function () {
    console.log("Next Tick 2 Executed");
});
// 总结 setImmediate 不插队  nextTick 插队执行 会造成I/O饥饿