///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const { retrieveData, SingleNodeClient, Converter } = require("@iota/iota.js");

const API_ENDPOINT = "https://api.lb-0.testnet.chrysalis2.com/";

async function run() {
  const client = new SingleNodeClient(API_ENDPOINT);

  const myIndex = "MY-DATA-INDEX";

  const found = await client.messagesFind(myIndex);

  if (found && found.messageIds.length > 0) {
    console.log(`Messages Found: ${found.count}`);

    const lastData = await retrieveData(client, found.messageIds[found.count - 1]);
    if (lastData) {
      console.log("First Result");
      console.log("\tIndex: ", lastData.index);
      console.log("\tData: ", Converter.bytesToAscii(lastData.data));
    }

  } else {
    console.log("Found no results");
  }
}

run()
  .then(() => console.log("Done"))
  .catch((err) => console.error(err));