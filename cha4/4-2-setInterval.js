// 设置时间间隔，执行定期工作
// 使用内置的setInterval(callback,delayMilliSeconds,[args]);

var slow = 0;
var normal = 0;
var fast = 0;
function displayValues() {
    console.log('fast = %d; normal = %d ; slow = %d', fast, normal, slow);
}

function updateSlow() {
    slow += 1;
}

function updateNormal() {
    normal += 1;
}

function updateFast() {
    fast += 1;
    displayValues();
}

setInterval(updateSlow, 2000);
setInterval(updateNormal, 1000);
setInterval(updateFast, 500);
//fast = 1; normal = 0 ; slow = 0
//fast = 2; normal = 1 ; slow = 0
//fast = 3; normal = 1 ; slow = 0
//fast = 4; normal = 2 ; slow = 1
//fast = 5; normal = 2 ; slow = 1
//fast = 6; normal = 3 ; slow = 1
//fast = 7; normal = 3 ; slow = 1
//fast = 8; normal = 4 ; slow = 2
//fast = 9; normal = 4 ; slow = 2
//fast = 10; normal = 5 ; slow = 2
//fast = 11; normal = 5 ; slow = 2
//fast = 12; normal = 6 ; slow = 3
//fast = 13; normal = 6 ; slow = 3
//fast = 14; normal = 7 ; slow = 3
//fast = 15; normal = 7 ; slow = 3
//fast = 16; normal = 8 ; slow = 4