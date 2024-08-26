const fs = require("fs");

const readTxt = fs.readFileSync("./texts/text.txt", "utf-8");

console.log(readTxt);
