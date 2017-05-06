/**
 * Created by ardaaslan on 04/05/2017.
 */
var app = require('../app');

var functions = {
    getBlockNumber: function (req, res) {
        res.json({message: app.web3.eth.blockNumber});
    }
};

module.exports = functions;
