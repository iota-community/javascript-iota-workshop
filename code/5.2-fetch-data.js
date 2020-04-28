///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
})

const address =
  'LOREMOORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLQD'

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    const msg = response
      .sort((a, b) => a.currentIndex - b.currentIndex)
      .map(tx => tx.signatureMessageFragment)
      .join('')

    console.log('Encoded message:')
    console.log(msg)

    //Convert trytes to plan text
    const data = Converter.trytesToAscii(msg)
    console.log('Decoded message:')
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
