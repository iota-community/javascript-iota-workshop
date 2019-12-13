const Mam = require('@iota/mam')

;(async () => {
  console.log('\r\n\r\n')
  console.log('Listening to MAM stream...')
  console.log('\r\n')
  await Mam.init('https://nodes.devnet.iota.org:443')

  let root = ''
  let nextRoot = ''

  await checkMam()

  setTimeout(checkMam, 5000)

  async function checkMam () {
    // Check the MAM stream every 5 seconds for new data on the current root
    // If a new root is returned we'll monitor that one from there on.
    if (root !== nextRoot) {
      root = nextRoot
    }

    const data = await Mam.fetch(root, 'public', null)
    nextRoot = data.nextRoot
  }
})()
