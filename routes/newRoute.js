const { Router } = require("express")
const newRouter = Router()
const messages = require("../data/messages")


newRouter.get("/", (req, res) => {
    res.render("form", {})
})

newRouter.post("/", (req, res) => {
    const messageText = req.body.messageText
    const authorName = req.body.authorName
    messages.push({ text: messageText, user: authorName, added: new Date() })
    res.redirect("/")
})

module.exports = newRouter;