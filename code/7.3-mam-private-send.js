///////////////////////////////
// MAM: Publish messages to Private Stream
///////////////////////////////

const Mam = require('@iota/mam')
const { asciiToTrytes } = require('@iota/converter')

let mamState = Mam.init('https://nodes.comnet.thetangle.org:443')

// We are using MAM restricted mode with a shared secret in this example
const mamType = 'restricted'
const mamSecret = 'DONTSHARETHIS'

mamState = Mam.changeMode(mamState, mamType, mamSecret)

const publish = async data => {
  // Convert the JSON to trytes and create a MAM message
  const trytes = asciiToTrytes(data)
  const message = Mam.create(mamState, trytes)

  // Update the MAM state to the state of this latest message
  mamState = message.state

  // Attach the message
  await Mam.attach(message.payload, message.address, 3, 10)
  console.log('Sent message to the Tangle!')
  console.log('Address: ' + message.root)
}

publish('Super Secret Message')
publish('Super Secret Message2')
