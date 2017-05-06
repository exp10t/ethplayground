var express = require('express');
var router = express.Router();
var actions = require('../functions/blockfunctions');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Blockchain Explorer'});
});

// GET latest block
router.get('/latestblock', actions.getLatestBlockNumber);

module.exports = router;
