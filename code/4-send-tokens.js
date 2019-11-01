///////////////////////////////
// Send tokens
///////////////////////////////

const Iota = require('@iota/core');

// Connect to a node
const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
});

// Define the depth that the node will use for tip selection
const depth = 3;
// Define the minimum weight magnitude for the Devnet
const minimumWeightMagnitude = 9;

// Replace this seed with the one that has IOTA tokens
const seed =
  'PUETTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

// Create a wrapping function so you can use async/await
const main = async () => {

  // Generate a new to send the tokens to
  // Be sure that you have never withdrawn from this address before 
  const receivingAddress = await iota.getNewAddress(seed, {
    index: 2,
    total: 1
  });

// Define an input transaction object
// that sends 500 i to your new address
  const transfers = [
    {
      value: 500,
      address: receivingAddress[0],
      tag: 'MYMAGIC'
    }
  ];

  console.log('Sending 500i to ' + receivingAddress[0]);

  try {
    // Construct bundle and convert to trytes
    const trytes = await iota.prepareTransfers(seed, transfers);
    // Send bundle to node.
    const response = await iota.sendTrytes(trytes, depth, minimumWeightMagnitude);

    console.log('Bundle sent');
    response.map(tx => console.log(tx));
  } catch (error) {
    console.log(error);
  }
}

main();
