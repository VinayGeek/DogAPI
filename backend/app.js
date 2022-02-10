const express = require("express");
const cors = require("cors");
const Route = require("./routes/route");
const MiddlewareError = require("./middleware/MiddlewareError");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();

app.use(cors());
app.use(express.json());
app.use(MiddlewareError);

app.use("/dogs", Route);

app.use("*", (req, res, next) => {
  return next(
    new ErrorHandler(`Can't find url "${req.originalUrl}" on this server`, 404)
  );
});

fetch();

module.exports = app;
