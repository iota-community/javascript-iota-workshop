///////////////////////////////
// MAM: Fetch messages to Public Stream
///////////////////////////////

const Mam = require('@iota/mam')
const { trytesToAscii } = require('@iota/converter')

// Initialize MAM State - PUBLIC
Mam.init('https://nodes.comnet.thetangle.org:443')

const root =
  'OXPOYTSZEOGUOITHYBWDYHXNCLRVQHGXMFMEIJLNHNDEWJYWQHGRPTQJ99MUWRDAOVPBIGSW9MSQLMOOA'

// Display coordinate data on our screen when we receive it
const showData = raw => {
  const data = trytesToAscii(raw)
  console.log(data)
}

const readMam = async () => {
  await Mam.fetch(root, 'public', null, showData)
}

readMam()
