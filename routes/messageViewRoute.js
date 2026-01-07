const { Router } = require("express");
const messageRouter = Router();
const messages = require("../data/messages");

messageRouter.get("/:index", (req, res) => {
  const index = Number(req.params.index);
  const message = messages[index];

  if (!message) return res.status(404).send("Message not found!");
  res.render("message", { message });
});

module.exports = messageRouter;