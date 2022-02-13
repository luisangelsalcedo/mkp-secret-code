const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HcUy6Re2LLBRtj");
});

app.listen("5000", () => {
  console.log("server run");
});
