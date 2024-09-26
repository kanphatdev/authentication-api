// import dependencies
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const { readdirSync } = require("fs");
const cors = require("cors");
const path = require("path");
// middleware
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(cors());

//  run the server
app.listen(5000, () => console.log("listening on port 5000"));
//  routes
readdirSync("./routes").map((item) => {
  app.use("/api", require(path.join(__dirname, "routes", item)));
});

