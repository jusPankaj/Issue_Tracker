const express = require("express");
const app = express();
const rootRouter = require("./routes/index");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

dotenv.config();
connectDB();

const port = process.env.PORT || 3000;

// set the view engine to ejs
app.use(express.urlencoded());
app.use(express.static("assets"));
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.use("/", rootRouter);

app.get("/", (req, res) => {
  res.send("<h1>hello Issue Tracker</h1");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Server did not create", err);
  }

  console.log(`Server is up and Running on ${port}`);
});
