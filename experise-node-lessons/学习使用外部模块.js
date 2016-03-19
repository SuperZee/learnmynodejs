var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', (req, res)=> {

    //console.log(req.query);
    const q = req.query.q;
    if (q) {
        var md5Value = utility.md5(q);
        var sha1Value = utility.sha1(q);
        res.send(`${md5Value}
         ${sha1Value}`);
    }else{
        res.end('xxxx');
    }

}).listen(8080, () =>{
    console.log('listening 8080');
});