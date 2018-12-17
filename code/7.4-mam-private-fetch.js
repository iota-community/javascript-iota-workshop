const Mam = require('@iota/mam')
const { asciiToTrytes, trytesToAscii } = require('@iota/converter')

// Init State
let root =
  'AQTQ9PVOIIVYEBS9FGHPULAVMYPOOYNKUDKOJNMXYCCZL9INEQUFHZMAJVVIKMTITEVONUDHFJERCXUMR'
const mamType = 'restricted'
const mamSecret = 'DONTSHARETHIS'

// Initialise MAM State
let mamState = Mam.init('https://nodes.devnet.thetangle.org:443')

// Callback used to pass data out of the fetch
const logData = data => console.log(JSON.parse(trytesToAscii(data)))

const execute = async () => {
  // Callback used to pass data + returns next_root
  const resp = await Mam.fetch(root, mamType, mamSecret, logData)
}
execute()
