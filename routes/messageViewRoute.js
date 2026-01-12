const { Router } = require("express");
const messageRouter = Router();
const messages = require("../data/queries");

messageRouter.get("/:index", async (req, res) => {
  const index = Number(req.params.index);
  const allMessages = await messages.retrieveAllMessages();
  const message = allMessages.find(item => item.id === index)

  if (!message) return res.status(404).send("Message not found!");
  res.render("message", { message });
});

module.exports = messageRouter;