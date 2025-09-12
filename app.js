const express = require("express");
const config = require("config")
const mainRouter = require("./routes/index")

const PORT = config.get("port") ?? 3030 

const app = express();
app.use(express.json)


app.use("/api", mainRouter);


const start = async () => {
  
try { 
    app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
