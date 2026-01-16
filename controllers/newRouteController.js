const messages = require("../data/queries")
const { body, validationResult, matchedData } = require("express-validator")
const nameErr = "must contain only letters.";
const lengthErr = "must be between 1 and 20 characters.";

const validateUser = [
    body("authorName")
    .trim()
    .isAlpha()
    .withMessage(`Author Name ${nameErr}`)
    .isLength({ min: 1, max: 20})
    .withMessage(`Author Name ${lengthErr}`),
    body("messageText")
    .trim()
    .isLength({ min: 1, max: 80})
    .withMessage("Message length should be 80 characters or less")
]

exports.newRouteGet = (req, res) => {
    res.render("form", { errors: "" })
}

exports.newRoutePost = [
    validateUser,
    async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).render("form", {
            errors: errors.array()
        })
    }
    const { messageText, authorName } = req.body
    await messages.writeMessage({ text: messageText, author: authorName})
    res.redirect("/")
}
]
