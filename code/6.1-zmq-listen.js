let zmq = require('zeromq')
let sock = zmq.socket('sub')

sock.connect('tcp://zmq.devnet.iota.org:5556')
sock.subscribe('tx')
sock.subscribe('sn')

sock.on('message', msg => {
  const data = msg.toString().split(' ') // Split to get topic & data
  switch (
    data[0] // Use index 0 to match topic
  ) {
    case 'tx':
      console.log(`I'm a TX!`, data)
      break
    case 'sn':
      console.log(`I'm a confirmed TX`, data)
      break
  }
})
