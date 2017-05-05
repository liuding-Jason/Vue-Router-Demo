
/*
	list router
*/

var express = require("express") ;
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
	res.header("Content-type" , "text/html") ;
	res.send("<h1>Hello List!</h1>");
});

// POST
router.post("/" , function(req , res){
	res.status(200) ;
	res.send(success({
		datalist : [{
			id : 1 ,
			name : 'Jack' ,
			age : 15
		} , {
			id : 2 ,
			name : 'Tom' ,
			age : 16 
		} , {
			id : 3 ,
			name : 'Bob' ,
			age : 14
		}]
	}));
});

module.exports = router ;