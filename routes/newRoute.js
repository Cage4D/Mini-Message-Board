const { Router } = require("express")
const newRouter = Router()
const messages = require("../data/queries")


newRouter.get("/", (req, res) => {
    res.render("form", {})
})

newRouter.post("/", async (req, res) => {
    const { messageText, authorName } = req.body
   await messages.writeMessage({ text: messageText, author: authorName })
    res.redirect("/")
})

module.exports = newRouter;