const express = require("express");
const controllers = require("../controllers/favoritePersonaje");

const route = express.Router();

route.post("/", controllers.savePersonaje);
route.get("/", controllers.getPersonajes);
route.delete("/:id/:iduser", controllers.deletePersonaje);
route.get("/one/:id", controllers.optenerPersonaje);

module.exports= route