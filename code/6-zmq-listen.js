///////////////////////////////
// Listen to live transactions
///////////////////////////////

let zmq = require('zeromq')
let sock = zmq.socket('sub')

// Connect to the devnet node's ZMQ port
sock.connect('tcp://zmq.devnet.iota.org:5556')

// Check if there is no command line argument
if (!process.argv[2]) {
  // Prompt user to add an address to the commmand line
  console.log('Watching all TXs on the node')
  console.log('---------------------')
  console.log('Note: If you want to watch an address for TXs use this:')
  console.log('node 6-zmq-listen.js AHSAK..99WS')

  // Subscribe to any TX coming in to the node
  sock.subscribe('tx')
} else {
  console.log('Watching for transactions to this address: ' + process.argv[2])
  console.log(
    'Remember to send a TX to this address & be patient it can take 30seconds for the tx appear.'
  )
  // Subscribe to the address thats passed in via the CLI
  sock.subscribe(process.argv[2])
}

sock.on('message', msg => {
  const data = msg.toString().split(' ') // Split to get topic & data
  switch (
    data[0] // Use index 0 to match topic
  ) {
    case 'tx': // Display any TX coming in.
      console.log(`I'm a TX!`, data)
      break
    case process.argv[2]: // Use the command line argument to subscribe.
      console.log(`I'm the TX you are looking for!`, data)
      break
  }
})
