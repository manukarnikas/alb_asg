const ListController = require('./controller/ListController');
const { dbInit } = require('./database/Database');
const express = require('express');
const cors = require('cors');

require('dotenv').config()

const app = express();

const init = async ()=>{
   //db
   dbInit();

   //middleware
   app.use(cors());
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

   //routes
   const listRouter = express.Router();
   listRouter.get('/',ListController.getLists);
   listRouter.post('/',ListController.addListItem);
   listRouter.delete('/:id',ListController.deleteListItem);

   app.use('/list',listRouter);
   //listen
   app.listen(process.env.NODE_PORT,()=>{
       console.log(`Server Started on port ${process.env.NODE_PORT}`);
   });
};

init();