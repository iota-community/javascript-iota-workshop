
///////////////////////////////
// publish to live transactions
///////////////////////////////

var zmq = require('zeromq')
  , sock = zmq.socket('pub');

sock.bindSync('tcp://zmq.devnet.iota.org:5556');

setInterval(function(){
  sock.send(['tx', 'hello message']);
}, 500);
