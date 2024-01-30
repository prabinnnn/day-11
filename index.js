const express = require("express");
const app = express();
const indexofrouter = require("./routes");
app.use("/", indexofrouter);
app.listen(8000, () => {
  console.log("app is application");
});
