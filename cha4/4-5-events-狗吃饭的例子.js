var events = require('events');

var dog =new events.EventEmitter;

function bark(){
    console.log("汪汪");
}
dog.on('RingRing',bark);

dog.emit('RingRing');