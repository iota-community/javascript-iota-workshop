///////////////////////////////
// Create an address from a new seed
/////
// First: run this code in a unix based terminal to generate an 81 Tryte seed.
// 'cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1'
// Paste the output of the above code into the 'seed' section below.
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
})

const seed =
  'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D'

iota
  .getNewAddress(seed, { index: 0, total: 1 })
  .then(address => {
    console.log('Your address is: ' + address)
    console.log('Paste this address into https://faucet.comnet.einfachiota.de/')
  })
  .catch(err => {
    console.log(err)
  })
