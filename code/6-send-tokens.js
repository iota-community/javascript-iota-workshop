///////////////////////////////
// Send tokens
///////////////////////////////
const { send, SingleNodeClient, Converter, Ed25519Seed } = require("@iota/iota.js");

const API_ENDPOINT = "https://api.lb-0.testnet.chrysalis2.com/";

async function run() {
    const client = new SingleNodeClient(API_ENDPOINT);

    const walletSeed = new Ed25519Seed(Converter.hexToBytes("1000000000000000000000000000000000000000000000000000000000000001"));
    
    const address = "iota1q9ycnmwf3xnmqwyzcy27j4w2yhcfha6akzysspmz5wxw8hwc3rs36yzsy68";
    const amount = 1;
    
    const response = await send(client, walletSeed, 0, address, amount);
    console.log("response: ", response);
}

run()
    .then(() => console.log("Done"))
    .catch((err) => console.error(err));
