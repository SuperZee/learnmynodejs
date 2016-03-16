// JSON比XML高效
// 反序列化/序列化更快
// JSON易于阅读

// 把JSON类型的字符串转换成对象
var accountStr = '{"name":"Jedi" , "member" : ["YoDa","Obi Man"], ' +
    ' "number" : 34152, "location" : "A galaxy far ,far away"}';
var accountObj = JSON.parse(accountStr);
console.log(accountObj.name);
console.log(accountObj.member);
console.log(accountObj);

// 把对象转换成JSON
var accountStr2 = JSON.stringify(accountObj);
console.log(accountStr2);