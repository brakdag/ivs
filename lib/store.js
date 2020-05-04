//store.js
var fs = require('fs')
var filename = "./data/archivo.json"
var config_path = "./data/config.json" 

function getdata(cb){
	fs.readFile(filename,function(err,res){
		getDefault(function(res2){
		cb(JSON.parse(res.toString())[res2])
		});
	});
}

function getDefault(cb){
	fs.readFile(config_path,function(err,res){
		cb(JSON.parse(res.toString())["default"])
	});
}


module.exports={getdata,getDefault}
