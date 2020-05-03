//store.js
var fs = require('fs')
var filename = "./data/archivo.json"

function getdata(cb){
	fs.readFile(filename,function(err,res){
		cb(res.toString())
	});
}

module.exports={getdata}
