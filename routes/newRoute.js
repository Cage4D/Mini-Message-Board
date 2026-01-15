const { Router } = require("express")
const newRouter = Router()
const newRouteController = require("../controllers/newRouteController")

newRouter.get("/", newRouteController.newRouteGet)
newRouter.post("/", newRouteController.newRoutePost)

module.exports = newRouter;