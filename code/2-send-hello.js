///////////////////////////////
// Send HELLOWORLD
///////////////////////////////


const { sendData, SingleNodeClient, Converter } = require("@iota/iota.js");

const API_ENDPOINT = "http://localhost:14265";

async function run() {
    const client = new SingleNodeClient(API_ENDPOINT);

    const myIndex = "MY-DATA-INDEX";

    const sendResult = await sendData(client, myIndex, Converter.asciiToBytes(`Hello World!`));
    console.log("Received Message Id", sendResult.messageId);

}

run()
    .then(() => console.log("Done"))
    .catch((err) => console.error(err));