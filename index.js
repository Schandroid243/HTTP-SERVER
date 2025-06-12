const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(
    JSON.stringify({
      id: 1,
      name: "Sir Isaac Newton",
    })
  );
});

server.listen(PORT, "192.168.19.193", () => {
  console.log(`Server listenning on port ${PORT}.`);
});
