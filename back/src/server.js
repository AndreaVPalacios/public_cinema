const express = require("express");
const router = require("./routes/indexRouters");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("front"));
app.use(morgan("dev"));

app.use(router);

module.exports = app;
