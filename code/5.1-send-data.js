///////////////////////////////
// Send Data
///////////////////////////////

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
})

// Use a random seed as there is no tokens being sent.
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'

// Create a variable for the address we will send too
const address =
  'LOREMOORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLQD'

const message = Converter.asciiToTrytes(
  `IOTA WorkshopLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Risus in hendrerit gravida rutrum quisque. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Amet porttitor eget dolor morbi non. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. A diam sollicitudin tempor id eu nisl nunc. Sit amet consectetur adipiscing elit duis. Et netus et malesuada fames ac turpis egestas sed. Volutpat sed cras ornare arcu. Id porta nibh venenatis cras sed. Vulputate enim nulla aliquet porttitor lacus luctus. Turpis egestas pretium aenean pharetra magna ac placerat. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi.Arcu odio ut sem nulla pharetra diam. Tellus id interdum velit laoreet id. Odio ut sem nulla pharetra diam. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Pharetra pharetra massa massa ultricies. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Quam adipiscing vitae proin sagittis nisl rhoncus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Felis eget nunc lobortis mattis aliquam faucibus purus. Interdum velit laoreet id donec ultrices tincidunt. In fermentum posuere urna nec tincidunt. Tortor aliquam nulla facilisi cras fermentum odio eu. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.Dignissim sodales ut eu sem integer vitae justo eget magna. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eget mi proin sed libero enim sed faucibus turpis in. Neque gravida in fermentum et. Diam quam nulla porttitor massa. A lacus vestibulum sed arcu non odio euismod lacinia at. Sed nisi lacus sed viverra tellus in hac habitasse platea. Enim lobortis scelerisque fermentum dui. Lorem dolor sed viverra ipsum nunc aliquet `
)

const transfers = [
  {
    value: 0,
    address: address, // Where the data is being sent
    message: message // The message converted into trytes
  }
]

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, 3, 10))
  .then(bundle => {
    console.log('Transfer successfully sent')
    bundle.map(tx => console.log(tx))
  })
  .catch(err => {
    console.log(err)
  })
