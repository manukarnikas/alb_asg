const mongoose = require("mongoose");
const DatabaseConfig = require("../config/DatabaseConfig");

const dbInit = async () => {
  const URI = `mongodb://${DatabaseConfig.HOST}:${DatabaseConfig.PORT}/${DatabaseConfig.DB}`;

  await mongoose.connect(URI);
  const connection = mongoose.connection;
  connection.on("connected", function () {
    console.log("Database is connected successfully");
  });
  connection.on("disconnected", function () {
    console.log("Database is disconnected successfully");
  });
  connection.on("error", ()=>{
      console.log("db error")
  });
};

module.exports = {
  dbInit,
};
