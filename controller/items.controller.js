const Items = require("../models/item.model");

const getItem = async function (req, res) {
  try {
    if (req.query.id) {
      console.log(req.query.id);
      const items = await Items.findOne({ _id: req.query.id });
      return res.send(items);
    }
    const items = await Items.find();
    return res.send(items);
  } catch (err) {
    return res.send("err");
  }
};

const createItem = async function (req, res) {
  const { name, description } = req.body;
  try {
    const item = new Items({ name: name, description: description });
    await item.save();
    return res.send("ok");
  } catch (err) {
    return res.send("something wrong");
  }
};

const updateItem = async (req, res) => {
  try {
    await Items.updateOne({ _id: req.params.id }, { ...req.body });
  } catch (err) {
    return res.send("err");
  }
};

const deleteItem = async (req, res) => {
  const item = await Items.findByIdAndRemove({ _id: req.params.id });
  if (!item) {
    return res.send("something wrong");
  }
  res.send(`delete document success ${item}`);
};

module.exports = {
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
