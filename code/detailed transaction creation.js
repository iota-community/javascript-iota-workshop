///////////////////////////////
// Detailed transaction creation
///////////////////////////////

const iotaLibrary = require('@iota/core')
const txconverter = require('@iota/transaction-converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'
const address =
  'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLQD'
const transfers = [
  {
    value: 0,
    address: address,
    tag: 'XXAAXXAA9XX'
  }
]

// Create a wrapping function so we can use async/await
async function main() {
  try {
    const trytes = await iota.prepareTransfers(seed, transfers)
    console.log(trytes[0].indexOf('XXAAXXAA9XX'))
    console.log('Tag:', trytes[0].slice(2592, 2619))
    console.log('Tx Hash:', trytes[0].slice(2349, 2430))

    // const tips           = await iota.getTransactionsToApprove(3)
    // const attachedTrytes = await iota.attachToTangle(tips.trunkTransaction, tips.branchTransaction, 14, trytes)
    //                        await iota.storeAndBroadcast(attachedTrytes)
    // console.log('Transaction successfully sent: https://devnet.thetangle.org/transaction/'+txconverter.asTransactionObject(attachedTrytes[0]).hash)
  } catch (e) {
    console.log(e)
  }
}

main()
