const express = require("express");
const app = express();
const indexofrouter = require("./routes");
app.use("/", indexofrouter);
mongoose.connect("mongodb://localhost:27017/username").then(() => {
  console.log("database is connected");
});
app.use((res, next, err, req) => {
  errmsg = err ? err.toString() : "something missing";
  res.status(500).json({ msg: errmsg });
});
app.listen(8000, () => {
  console.log("app is application");
});
