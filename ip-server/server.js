const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const init = async () => {

  //middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //routes
  const router = express.Router();
  router.get("/ip", (req, res) => {
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

  app.use("/api", router);
  console.log('initialized routes');
  //listen
  const port = 3008;
  app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
  });
};

init();
