const IOTA = require("iota.lib.js");

const iota = new IOTA({ provider: "https://nodes.thetangle.org:443" });

var recipient = process.argv[2];
var message = process.argv[3];

console.log("Recipient:", recipient);
console.log("Message:", message);

iota.api.getNodeInfo((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(success);
  }
});

var seed =
  "OQRHYXWCRXIWCWW9AARDMAVETXSCXASZMPZLRB9HNTKKPNNPXDDMQFNWEHXTZSWGAWJJPU9HVLLWUIPQM";
var options = {};
options.index = 0;
options.security = 2;
options.checksum = true;
options.total = 1;

console.log("Seed: " + seed);
console.log("options: ", options);

iota.api.getNewAddress(seed, options, function(error, address) {
  if (error) {
    console.log(error);
  } else {
    console.log(address);
  }
});

var messageTrytes = iota.utils.toTrytes(message);
console.log("messageTrytes: " + messageTrytes);

// here we define the transfers object, each entry is an individual transaction
var transfer = [
  {
    address: recipient,
    value: 0,
    message: messageTrytes
  }
];

console.log("Send TX");
// We send the transfer from this seed, with depth 4 and minWeightMagnitude 18
iota.api.sendTransfer(seed, 3, 14, transfer, function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log(success);

    var tx_hash = success[0].hash;
    console.log("TX_HASH:", tx_hash);
  }
});
