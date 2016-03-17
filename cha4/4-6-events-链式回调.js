var logName = (name, callback) => {
    console.log('Name is %s', name);
    if (names.length) {
        process.nextTick(()=> {
            callback();
        });
    }
}
var logNames = (names) => {
    var name = names.pop();
    logName(name, () => {
        logNames(names);
    });
}

var names = ['单号', '涂帅', '安徽'];
logNames(names);