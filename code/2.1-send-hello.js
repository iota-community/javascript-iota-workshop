///////////////////////////////
// Send HELLOWORLD
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
})

const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D'
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'

const converter = require('@iota/converter')

const message = "HELLOWORLD"

const message_in_trytes = converter.asciiToTrytes(message)

const transfers = [
  {
    value: 0,
    address: address,
    message: message_in_trytes
  }
]

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 10)))
  .then(bundle => {
    console.log(bundle)
  })
  .catch(err => {
    console.error(err)
  })
