

var express = require("express") ;
var app = express() ;

app.get("/" , function(req , res){
	res.status(200);
	res.send("<h1>Hello Express!</h1>");
});

app.listen(3003);
console.log("server is running at port 3000");