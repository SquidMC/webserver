const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.set("views", path.join(__dirname,"/public"));
app.set("view engine", "ejs");

// middlewares //
app.use(bodyParser.urlencoded({ extended: true }));

// statics //
app.use("/", express.static("public/home"));
app.use("/assets", express.static("public/assets"));

app.listen(3000);