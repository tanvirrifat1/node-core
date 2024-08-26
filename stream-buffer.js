const http = require("http");
const fs = require("fs");

// Create a server with raw Node.js
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET") {
    const readableStream = fs.createReadStream(
      process.cwd() + "/texts/text.txt"
    );

    readableStream.on("data", (buffer) => {
      res.write(buffer);
    });

    readableStream.on("end", () => {
      res.end("Hello Developer");
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(5000, () => {
  console.log(`server running on port 5000`);
});
