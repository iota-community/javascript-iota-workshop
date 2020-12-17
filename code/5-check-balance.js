///////////////////////////////
// Fetch balance of an address
///////////////////////////////

const { getBalance, SingleNodeClient, Converter, Ed25519Seed, Bip32Path } = require("@iota/iota.js");

const API_ENDPOINT = "https://api.lb-0.testnet.chrysalis2.com/";

async function run() {
    const client = new SingleNodeClient(API_ENDPOINT);

    const walletSeed = new Ed25519Seed(Converter.hexToBytes("1000000000000000000000000000000000000000000000000000000000000001"));
    const walletPath = new Bip32Path("m/44'/4218'/0'/0'/0'");
    const balance = await getBalance(client, walletSeed, walletPath);
    console.log("balance: ", balance);

}

run()
    .then(() => console.log("Done"))
    .catch((err) => console.error(err));
