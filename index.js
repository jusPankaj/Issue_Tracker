const express = require("express");

const app = express();

const port = 3001;

app.get("/", (req, res) => {
  res.send("<h1>hello Issue Tracker</h1");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Server did not create", err);
  }

  console.log(`Server is up and Running on ${port}`);
});
