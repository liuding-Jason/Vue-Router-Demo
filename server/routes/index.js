
/*
	index router
*/

var express = require("express") ;
var path = require("path") ;
// var Response = require(path.join(__dirname , "../util/reponse")) ;
var router = express.Router() ;

// 公共部分
function success(data){
	return {
		code : 0 ,
		data : data ,
		message : "ok" ,
		version : '0.0.1'
	}
}

// test API
router.get("/" , function(req , res){
	res.status(200) ;
	res.header("Content-Type" , "text/html");
	res.send("<h1>Hello Express!</h1>");
}) ;


// post
router.post("/" , function(req , res){
	res.status(200) ;
	res.send(success({name : 'Jack'}));
});


module.exports = router ;