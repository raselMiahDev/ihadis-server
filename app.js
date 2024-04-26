const express = require("express");
const router = require("./src/route/api");
const connectDB = require("./src/database/DBConnect")
const app = new express();
const bodyParser = require("body-parser");

//Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

//Database
const mongoose = require("mongoose");
const path = require("path");

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

//Body perser
app.use(bodyParser.json());
//mongodb Connection
connectDB()

//Rate Limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 100, max: 3000 });
app.use(limiter)
//Database
// Managing BackEnd API Routing
app.use("/api/v1", router);
// Managing Front End Routing
app.use(express.static("client/dist"));
app.get("*", function (res, res) {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

module.exports = app;
