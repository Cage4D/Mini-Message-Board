const express = require("express")
const app = express()
const indexRouter = require("./routes/index")
const newRouteRouter = require("./routes/newRoute")

app.use("/", indexRouter)
app.use("/new", newRouteRouter)