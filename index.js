const Express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
require("./src/utils/mongoInit").connect();

// confiuracion de cors
const corsOptions = {
    origin: "http://localhost:5173", 
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  };

  const PORT = process.env.PORT;
  // EJECUCIONES

const app = Express();

app.use(cookieParser());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

 // rutas

 app.use("/api", require("./src/routes/index"));

app.listen(PORT, async () => {
  await console.log("puerto en marcha en el puerto " + " " + PORT);
});

module.exports = app