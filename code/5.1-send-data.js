///////////////////////////////////////////
// Send data over more than one transaction
///////////////////////////////////////////

const Iota = require('@iota/core');
const Converter = require('@iota/converter');

const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
});

// Define the depth that the node will use for tip selection
const depth = 3;
// Define the minimum weight magnitude for the Devnet
const minimumWeightMagnitude = 9;

// Define a seed and an address.
// These do not need to belong to anyone or have IOTA tokens.
// They must contain a mamximum of 81 trytes
// or 90 trytes with a valid checksum
const address =
  'LOREMOORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLQD';
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

const message = Converter.asciiToTrytes(
  `IOTA WorkshopLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Risus in hendrerit gravida rutrum quisque. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Amet porttitor eget dolor morbi non. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. A diam sollicitudin tempor id eu nisl nunc. Sit amet consectetur adipiscing elit duis. Et netus et malesuada fames ac turpis egestas sed. Volutpat sed cras ornare arcu. Id porta nibh venenatis cras sed. Vulputate enim nulla aliquet porttitor lacus luctus. Turpis egestas pretium aenean pharetra magna ac placerat. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi.Arcu odio ut sem nulla pharetra diam. Tellus id interdum velit laoreet id. Odio ut sem nulla pharetra diam. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Pharetra pharetra massa massa ultricies. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Quam adipiscing vitae proin sagittis nisl rhoncus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Felis eget nunc lobortis mattis aliquam faucibus purus. Interdum velit laoreet id donec ultrices tincidunt. In fermentum posuere urna nec tincidunt. Tortor aliquam nulla facilisi cras fermentum odio eu. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.Dignissim sodales ut eu sem integer vitae justo eget magna. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eget mi proin sed libero enim sed faucibus turpis in. Neque gravida in fermentum et. Diam quam nulla porttitor massa. A lacus vestibulum sed arcu non odio euismod lacinia at. Sed nisi lacus sed viverra tellus in hac habitasse platea. Enim lobortis scelerisque fermentum dui. Lorem dolor sed viverra ipsum nunc aliquet `
)

// Define the zero-value transaction object
// that sends the message to the address
const transfers = [
  {
    value: 0,
    address: address, // Where the data is being sent
    message: message // The message converted into trytes
  }
]

// Create a bundle from the `transfers` array
// and send the transactions to the node
iota.prepareTransfers(seed, transfers)
  .then(trytes => {
    return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
  })
  .then(bundle => {
    console.log('Transfer successfully sent');
    bundle.map(tx => console.log(tx));
  })
  .catch(err => {
    console.log(err)
  });
