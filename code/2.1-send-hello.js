/////////////////////////////////////////////
// Send a zero-value transaction with a "hello world" message
/////////////////////////////////////////////

const Iota = require('@iota/core');
const Converter = require('@iota/converter');

// Connect to a node
const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
});

// Define the depth that the node will use for tip selection
const depth = 3;
// Define the minimum weight magnitude for the Devnet
const minimumWeightMagnitude = 9;

// Define a seed and an address.
// These do not need to belong to anyone or have IOTA tokens.
// They must contain a mamximum of 81 trytes
// or 90 trytes with a valid checksum
const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

// Define a message to send.
// This message must include only ASCII characters.
const message = "HELLOWORLD";

// Convert the message to trytes
const messageInTrytes = Converter.asciiToTrytes(message);

// Define a zero-value transaction object
// that sends the message to the address
const transfers = [
  {
    value: 0,
    address: address,
    message: messageInTrytes
  }
]

// Create a bundle from the `transfers` array
// and send the transaction to the node
iota.prepareTransfers(seed, transfers)
  .then(trytes => {
    return iota.sendTrytes(trytes, Depth, minimumWeightMagnitude);
  })
  .then(bundle => {
    console.log(bundle)
  })
  .catch(err => {
    console.error(err)
  });
