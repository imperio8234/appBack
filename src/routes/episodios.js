const express = require("express");
const controllers = require("../controllers/favoriteEpisodeController");

const route = express.Router();

route.post("/", controllers.saveEpisode);
route.get("/", controllers.getEpisodes);
route.delete("/:id/:iduser", controllers.deleteEpisode);
route.get("/one/:id", controllers.optenerEpisode);

module.exports= route