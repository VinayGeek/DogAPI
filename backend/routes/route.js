const express = require("express");
const Route = express.Router();
const controller = require("../controller/controller");

Route.route("/").get(controller.getAllData).post(controller.createData);
Route.route("/:id").patch(controller.updateData).delete(controller.deleteData);
Route.route("/:name").get(controller.getOneData);

module.exports = Route;
