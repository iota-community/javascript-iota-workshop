///////////////////////////////
// Connect to a synchronized node
///////////////////////////////

const Iota = require('@iota/core');

// Connect to a node
const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
});

// Request information about the node
iota.getNodeInfo()
  .then(response => {
    console.log(JSON.stringify(response, null, 1));
  })
  .catch(err => {
    console.error(err)
  });
