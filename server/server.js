const express = require("express");

const server = express();
const PORT = 3000;
const HOST = "http://localhost";

//set path to server static files (public)

server.use(express.static("public"));

server.get("/", (req, res) => {
  //NOTE: This will NOT override the (index) file in the public directory

  res.send(
    JSON.stringify({
      status: "ok",
    }),
  );
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${HOST}:${PORT}!`);
});
