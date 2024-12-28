const fs = require("fs");
if (!fs.existsSync("svg")) {
  console.error("Error: svg directory does not exist");
  process.exit(1);
}
