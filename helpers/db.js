const mongoose = require("mongoose");
const URL = process.env.DB_URL;
const db = mongoose.connection;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on("connected", () => console.log("connect db"));
