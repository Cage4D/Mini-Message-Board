const messages = require("../data/queries")

exports.newRouteGet = (req, res) => {
    res.render("form", {})
}

exports.newRoutePost = async (req, res) => {
    const { messageText, authorName } = req.body
    await messages.writeMessage({ text: messageText, author: authorName})
    res.redirect("/")
}
