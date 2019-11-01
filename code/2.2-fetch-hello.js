////////////////////////////////////////////////
// Read your "hello-world" message on the Tangle
////////////////////////////////////////////////

const Iota = require('@iota/core');

const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
});

const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';


// Get any transactions that were sent to the address
iota.findTransactionObjects({ addresses: [address] })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
