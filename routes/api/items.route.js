const express = require("express");
const router = express.Router();
const Items = require("../../models/item.model");
router.get("/items:id", async (req, res) => {
  if (req.params.id) {
    const items = await Items.findOne(req.params.id);
    return res.send(items);
  }
  const items = await Items.find();
  return res.send(items);
});

router.post("/items/create", async (req, res) => {
  const { name, description } = req.body;
  // console.log(req.body);
  try {
    const item = new Items({ name: name, description: description });
    await item.save();
    return res.send("ok");
  } catch (err) {
    // console.log(err);
    return res.send("something wrong");
  }
});
router.put("/items:id", async (req, res) => {
  // Items.updateOne({ _id: req.params.id }, { ...req.body })
  //   .then((data) => res.send(data))
  //   .catch((err) => res.send(err));
  try {
    await Items.updateOne({ _id: req.params.id }, { ...req.body });
  } catch (err) {
    return res.send("err");
  }
});
router.delete("/items:id", async (req, res) => {
  const item = await Items.findByIdAndRemove(req.params.id);
  console.log(item);
  if (!item) {
    return res.send("something wrong");
  }
  res.send("ok");
});
module.exports = router;
