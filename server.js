const express = require("express");
require("dotenv").config();
require("./helpers/db");

const app = express();
const PORT = process.env.PORT;
const itemRoute = require("./routes/api/items.route");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.json());
app.use("/items", itemRoute);

app.listen(PORT, () => console.log(`server start port ${PORT}`));
