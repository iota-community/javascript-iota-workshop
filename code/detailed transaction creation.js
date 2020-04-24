///////////////////////////////
// Detailed transaction creation
///////////////////////////////

const iotaLibrary = require('@iota/core')
const txconverter = require('@iota/transaction-converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
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
    const tips           = await iota.getTransactionsToApprove(3)
    const attachedTrytes = await iota.attachToTangle(tips.trunkTransaction, tips.branchTransaction, 10, trytes)
                           await iota.storeAndBroadcast(attachedTrytes)
    console.log('Transaction successfully sent: https://comnet.thetangle.org/transaction/'+txconverter.asTransactionObject(attachedTrytes[0]).hash)
  } catch (e) {
    console.log(e)
  }
}

main()
