const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig); //carregar config no multer
//toda logica no controller
routes.post("/sessions", SessionController.store);
//get post put delete

// req.query acessar query params
//req.params acessar os parametros da rota
//req.body retornar body da reqsicao

routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);
module.exports = routes;
