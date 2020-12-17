///////////////////////////////
// Environment Check
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://comnet.einfachiota.de/'
})

iota
  .getNodeInfo()
  .then(response => console.log(response))
  .catch(err => {
    console.error(err)
  })
