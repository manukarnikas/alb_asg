const ListController = require("./controller/ListController");
const { dbInit } = require("./database/Database");
const express = require("express");
const cors = require("cors");

const app = express();

const init = async () => {
  //db
  try {
    await dbInit();

    //middleware
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //routes

    const healthCheckRouter = express.Router();
    healthCheckRouter.get('/', (req, res) => {
      res.status(200);
      res.send({
        status: "success"
      })
    });

    const router = express.Router();
    router.get("/list", ListController.getLists);
    router.post("/list", ListController.addListItem);
    router.delete("/list/:id", ListController.deleteListItem);

    app.use("/api", router);
    app.use("/health", healthCheckRouter);
    console.log('initialized routes');
    //listen
    const port = 3008;
    app.listen(port, () => {
      console.log(`Server Started on port ${port}`);
    });
  } catch (err) {
    console.log("Error while initializing app", err)
  }
};

init();
