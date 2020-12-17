///////////////////////////////
// Send tokens
///////////////////////////////
const { send, SingleNodeClient, Converter, Ed25519Seed } = require("@iota/iota.js");

const API_ENDPOINT = "https://api.lb-0.testnet.chrysalis2.com/";

async function run() {
    const client = new SingleNodeClient(API_ENDPOINT);

    const walletSeed = new Ed25519Seed(Converter.hexToBytes("1000000000000000000000000000000000000000000000000000000000000001"));
    
    const address = "iot1q98cdg7273a4y9ttd5trwkv3twtw5kh9dezmj2vvtgh5gfecklzwszfp9lw";
    const amount = 1;
    
    const response = await send(client, walletSeed, 0, address, amount);
    console.log("response: ", response);
}

run()
    .then(() => console.log("Done"))
    .catch((err) => console.error(err));
