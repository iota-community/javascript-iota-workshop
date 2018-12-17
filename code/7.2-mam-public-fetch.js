const Mam = require('@iota/mam')
const { trytesToAscii } = require('@iota/converter')

// Initialize MAM State - PUBLIC
Mam.init('https://nodes.devnet.thetangle.org:443')

const root =
  'EPKKCPWEZBMQYZEEVIN9FCU9KYFZQTLJMVJGSJKYJHEJLSFBCWYFC9URDBLWC9GINUNWUWWSZJWNT9YJQ'

// Display coordinate data on our screen when we receive it
const showData = raw => {
  const data = trytesToAscii(raw)
  console.log(data)
}

const readMam = async () => {
  await Mam.fetch(root, 'public', null, showData)
}

readMam()
