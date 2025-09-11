const express = require("express");
const config = require("config")

const PORT = config.get("port") ?? 3030 

const app = express();
app(express.json)


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
