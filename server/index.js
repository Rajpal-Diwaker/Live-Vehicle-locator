const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
