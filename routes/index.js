var express = require('express');
var router = express.Router();
var actions = require('../helpers/helpers');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Blockchain Explorer'});
});

router.get('/testfunc', actions.getBlockNumber);

module.exports = router;
