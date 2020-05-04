const express = require('express');
const router = express.Router();
const store = require('../lib/store')

router.get('/getdata', function (req, res) {
    store.getdata(function(x){
    	console.log(JSON.stringify(x))
    	res.send(JSON.stringify(x))})
});

router.get('/setdata', function (req, res) {

});


router.get('/', (req, res) => { res.render('index.ejs') })

module.exports = router