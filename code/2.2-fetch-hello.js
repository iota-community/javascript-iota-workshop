///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99DMNFAQLWHD'

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error(err)
  })
