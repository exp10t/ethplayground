/**
 * Created by ardaaslan on 04/05/2017.
 */

var functions = {
    getBlockNumber: function (req, res) {
        res.json({message: global.web3.eth.blockNumber});
    }
};

module.exports = functions;
