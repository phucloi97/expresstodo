const express = require("express");
const router = express.Router();
const ItemController = require("../../controller/items.controller");

router.get("/", ItemController.getItem);

router.post("/create", ItemController.createItem);

router.put("/:id", ItemController.updateItem);

router.delete("/:id", ItemController.deleteItem);

module.exports = router;
