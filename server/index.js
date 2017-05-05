

var express = require("express") ;
var app = express() ;
var path = require("path") ;
var whitelist = require("./whitelist.js") || "*" ;

//设置跨域访问 - config1
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", whitelist);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 解析参数 - config2
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var IndexRouter = require(path.join(__dirname , "/routes/index")) ;
var ListRouter 	= require(path.join(__dirname , "/routes/list")) ;

// routes
app.use("/" , IndexRouter);
app.use("/list" , ListRouter);

app.listen(3003) ;
console.log("server is running at port 3003");