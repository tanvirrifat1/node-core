const fs = require("fs");

fs.readFile("./texts/text.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text");
  }
  console.log(data);

  fs.writeFile("./texts/text2.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error writing text");
    }
  });
});
