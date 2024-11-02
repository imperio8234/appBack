const express = require("express");
const controllers = require("../controllers/userController");

const route = express.Router();

route.post("/", controllers.createUser);
route.get("/", controllers.getUser);
route.delete("/:id", controllers.deleteUser);
route.put("/:id", controllers.updateUser);

module.exports= route