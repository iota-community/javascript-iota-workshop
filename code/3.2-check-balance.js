////////////////////////////////
// Get the balance of an address
////////////////////////////////

const Iota = require('@iota/core');

const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
});

const address =
  'NBZLOBCWG9BAQTODDKNF9LYYTBOUWSQSGCWFQVZZR9QXCOAIBRYDTZOEGBGMZKJYZOPPGRGFFWTXUKUKW';

iota.getBalances([address], 100)
  .then(({ balances }) => {
    console.log(balances)
  })
  .catch(err => {
    console.error(err)
  });
