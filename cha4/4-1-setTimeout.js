// events driver 事件驱动

// 实现定时器
function simpleTimeout(consoleTimer){
    console.log(consoleTimer);
}

// 设置标签
console.time("towSecond");
// 参数1 回调函数 , 参数2 延迟的毫秒数  参数3
setTimeout(simpleTimeout,2000,"towSecond");

console.time('oneSecond');
setTimeout(simpleTimeout,1000,'oneSecond');

console.time('fiveSecond');
setTimeout(simpleTimeout,5000,'fiveSecond');

console.time('50MilliSecond');
setTimeout(simpleTimeout,50,'50MilliSecond');



