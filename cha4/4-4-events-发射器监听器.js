///EventEmitter是nodejs核心的一部分。很多nodejs对象继承自EventEmitter，用来处理事件，及回调。
// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
// EventEmitter通过events模块访问
var events = require('events');
// 事件发射器
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 给发射器注入炮弹？
eventEmitter.on('some_event', function () {
    console.log("some_event_happen");
});

setTimeout(function () {
    eventEmitter.emit('some_event');

},1000);
// 1秒后输出 some_event_happen

console.log(eventEmitter.listeners('some_event'));

// ECMAScripy6 改
var events = require('events');
// 事件发射器
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 给发射器注入炮弹？
eventEmitter.on('some_event',()=> {
    console.log("some_event_happen");
});

setTimeout( ()=> {
    eventEmitter.emit('some_event');
},1000);


/*

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');

*/
