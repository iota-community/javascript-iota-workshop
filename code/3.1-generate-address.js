///////////////////////////////
// Generate an address from a new seed
/////
// First: run this code in a Unix based terminal to generate an 81-tryte seed.
// 'cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1'
// Paste the output of the above code into the 'seed' constant below.
///////////////////////////////

const Iota = require('@iota/core');

const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
});

const securityLevel = 2;

const seed =
  'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D';


// Generate one address with index 0 and security level 2
// If this address is spent, this method returns the next unspent address
iota.getNewAddress(seed, { index: 0, securityLevel: securityLevel, total: 1 })
  .then(address => {
    console.log('Your address is: ' + address);
    console.log('Paste this address into https://faucet.devnet.iota.org to get test IOTA tokens');
  })
  .catch(err => {
    console.log(err)
  });
