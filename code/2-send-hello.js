///////////////////////////////
// Send HELLOWORLD
///////////////////////////////


const { sendData, SingleNodeClient, Converter } = require("@iota/iota.js");

const API_ENDPOINT = "https://api.lb-0.testnet.chrysalis2.com/";

async function run() {
    const client = new SingleNodeClient(API_ENDPOINT);

    const myIndex = "MY-DATA-INDEX";

    const sendResult = await sendData(client, myIndex, Converter.utf8ToBytes(`Hello World!`));
    console.log("Received Message Id", sendResult.messageId);

}

run()
    .then(() => console.log("Done"))
    .catch((err) => console.error(err));
