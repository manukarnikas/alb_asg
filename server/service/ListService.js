const List = require("../model/List");

const addListItem = async (data) => {
  try {
    const result = await new List(data).save();
    return result;
  } catch (err) {
    throw err;
  }
};

const getLists = async () => {
  try {
    const result = await List.find().exec();
    return result;
  } catch (err) {
    throw err;
  }
};

const deleteListItem = async (id) => {
  try {
    const result = await List.findOneAndDelete({ _id: id });
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addListItem,
  getLists,
  deleteListItem,
};
