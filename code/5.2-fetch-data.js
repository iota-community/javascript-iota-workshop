///////////////////////////////////////////////
// Read your "Lorem ipsum" messages on the Tangle
///////////////////////////////////////////////

const Iota = require('@iota/core');
const Converter = require('@iota/converter');

const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
  'LOREMOORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLQD'

iota.findTransactionObjects({ addresses: [address] })
  .then(response => {
    const msg = response
      // Put the transactions in the correct order
      .sort((a, b) => a.currentIndex - b.currentIndex)
      // Get the message from each transaction
      .map(tx => tx.signatureMessageFragment)
      .join('');

    console.log('Encoded message:');
    console.log(msg);

    //Convert the message to plain text
    const data = Converter.trytesToAscii(msg);
    console.log('Decoded message:');
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
