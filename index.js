const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Nicolas Tesla",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
  {
    id: 2,
    name: "Albert Einstein",
  },
  {
    id: 3,
    name: "Carl Jung",
  },
  {
    id: 4,
    name: "Schrödinger",
  },
  {
    id: 5,
    name: "Oppenheimer",
  },
  {
    id: 6,
    name: "Bill Gates",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const specificFriend = +items[2]; //Shorthand casting for string to number. We can also use Number(items[2]);
      res.end(JSON.stringify(friends[specificFriend]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Isaac !</li>");
    res.write("<li>What are your thoughts on astronomy ?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
  {
  }
});

server.listen(PORT, "192.168.19.193", () => {
  console.log(`Server listenning on port ${PORT}.`);
});
