const tunnel = require("localtunnel");
const readline = require("readline");

tunnel(3000, { subdomain: "levi-react" }).then((value) => {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.on("keypress", (_, key) => {
    if (key.ctrl && key.name == "c") {
      console.log("Exiting");
      value.close();
      process.exit(0);
    }
  });
  process.stdin.setRawMode(true);
  console.log(value.url);
});
