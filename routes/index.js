const express = require('express');
const router = express.Router();
const store = require('../lib/store')

router.get('/getdata', function (req, res) {
    store.getdata(function(x){res.send(x)})
})



router.get('/', (req, res) => { res.render('index.ejs') })

module.exports = router