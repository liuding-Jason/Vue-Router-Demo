

var express = require("express") ;
var app = express() ;
var path = require("path") ;
var whitelist = require("./whitelist.js") || "*" ;

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", whitelist);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 解析参数
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/" , function(req , res){
	res.status(200);
	res.send("<h1>Hello Express!</h1>");
});

app.listen(3003);
console.log("server is running at port 3000");