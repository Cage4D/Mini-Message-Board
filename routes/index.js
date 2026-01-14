const { Router } = require("express")
const indexRouter = Router()
const messages = require("../data/queries")

indexRouter.get("/", async (req, res) => {
    res.render("index", {
        title: "Mini Messageboard",
        messages: await messages.retrieveAllMessages(),
    })
})

module.exports = indexRouter;