///////////////////////////////
// Fetch balance of an address
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
})

const address =
  'NBZLOBCWG9BAQTODDKNF9LYYTBOUWSQSGCWFQVZZR9QXCOAIBRYDTZOEGBGMZKJYZOPPGRGFFWTXUKUKW'

iota
  .getBalances([address], 100)
  .then(({ balances }) => {
    console.log(balances)
  })
  .catch(err => {
    console.error(err)
  })
