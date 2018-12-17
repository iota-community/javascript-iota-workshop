///////////////////////////////
// Environment Check
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

iota
  .getNodeInfo()
  .then(response => console.log(response))
  .catch(err => {
    console.error(err)
  })
