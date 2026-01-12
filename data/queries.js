const pool = require("./pool")

async function retrieveAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows;
}

module.exports = {
    retrieveAllMessages
}