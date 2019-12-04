const express = require("express");
const request = require("request");
const app = express();

const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: process.env.ORIGIN_URL || "http://localhost",
  optionsSuccessStatus: 200
};

app.use(express.static("public"));

app.use("/cors/*", function(req, res) {
  req.pipe(request(req.params[0])).pipe(res);
});

app.listen(PORT, function() {
  console.log("CORS-enabled web server listening on port " + PORT);
});
