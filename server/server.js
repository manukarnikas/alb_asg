const ListController = require("./controller/ListController");
const { dbInit } = require("./database/Database");
const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();

const app = express();

const init = async () => {
  //db
  dbInit();

  //middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //routes
  const listRouter = express.Router();
  listRouter.get("/", ListController.getLists);
  listRouter.post("/", ListController.addListItem);
  listRouter.delete("/:id", ListController.deleteListItem);

  const ipRouter = express.Router();
  ipRouter.get("/", (req, res) => {
    const url = "https://api64.ipify.org?format=json";
    axios
      .get(url)
      .then(function (response) {
        res.status(200);
        res.send(response?.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500);
        res.send(error.message);
      });
  });

  app.use("/api/list", listRouter);
  app.use("/api/ip", ipRouter);
  //listen
  app.listen(process.env.NODE_PORT, () => {
    console.log(`Server Started on port ${process.env.NODE_PORT}`);
  });
};

init();
