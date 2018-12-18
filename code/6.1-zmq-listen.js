let zmq = require('zeromq')
let sock = zmq.socket('sub')

// Connect to the Zero Message Queue of an IRI Devnet node.
// https://docs.iota.org/introduction/networks/devnet#realtime-message-stream---%C3%B8mq
sock.connect('tcp://zmq.devnet.iota.org:5556')

// Subscribe to topic "tx", that means we listen for newly seen transactions
sock.subscribe('tx')
// Subscribe to topic "sn", that means we listen for newly confirmed transactions ( by solid milestone children measurement )
sock.subscribe('sn')

// Here we listen to message events.
// Once a message is received it is turned from a Buffer to a String.
// Then it is split and matched in a switch operator.
sock.on('message', msg => {
  // Split to get topic & data
  const data = msg.toString().split(' ')
  switch (
    data[0] // Use index 0 to match topic
  ) {
    case 'tx':
      // The message is a new transaction
      console.log(`I'm a TX!`, data)
      break
    case 'sn':
      // The message is a confirmed transaction
      console.log(`I'm a confirmed TX`, data)
      break
  }
})
