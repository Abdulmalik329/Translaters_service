const express = require("express");
const config = require("config");
const mainRouter = require("./routes/index");
const sequelize = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middlewares/errorHanding");
const logger = require("./services/loger.servec");

const PORT = config.get("port") ?? 3030;

const app = express();

logger.error("tract")
logger.info("log ma'lumotlari"),
logger.debug("debug ma'lumotlari")
logger.warn("log ma'lumotlari")

app.use(express.json());
app.use(cookieParser());

app.use("/api", mainRouter);
app.use("/api/auth", authRoutes);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate(); 
    console.log("Database connected successfully.");

    await sequelize.sync({ alter: true });
    console.log("All models synchronized.");

    app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database or sync models:", error);
  }
};

start();
