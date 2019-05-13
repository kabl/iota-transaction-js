const IOTA = require("iota.lib.js");

const iota = new IOTA({ provider: "https://nodes.thetangle.org:443" });

function receiveTransactionByHash(transactionhash) {
  return new Promise((resolve, reject) => {
    iota.api.getTransactionsObjects([transactionhash], (error, success) => {
      if (success) {
        var trytes = success[0].signatureMessageFragment;
        n = trytes.indexOf("99999999999999");
        result = iota.utils.fromTrytes(trytes.substring(0, n));
        console.log(result);
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
}

tx_hash = process.argv[2];
receiveTransactionByHash(tx_hash);
