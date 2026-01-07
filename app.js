const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;
const indexRouter = require("./routes/index");
const newRouteRouter = require("./routes/newRoute");
const messageRouter = require("./routes/messageViewRoute");
const assetsPath = path.join(__dirname, "public")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouteRouter);
app.use("/message", messageRouter);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`listening on PORT ${PORT}`);
});
