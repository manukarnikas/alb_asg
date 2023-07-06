const ListService  = require('../service/ListService');

const getLists = async (req,res)=>{
    try{
        const result = await ListService.getLists();
        res.status(200);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const addListItem = async (req,res)=>{
    try{
        const result = await ListService.addListItem(req.body);
        res.status(201);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const deleteListItem = async (req,res)=>{
    try{
        const result = await ListService.deleteListItem(req.params.id);
        res.status(204);
        res.send("Deleted Successfully");
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLists,
    addListItem,
    deleteListItem
}