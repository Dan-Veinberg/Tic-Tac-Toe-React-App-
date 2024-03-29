const express = require("express");
const app = express(); // create express app
const path = require("path");

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("server started on port 5000");
});