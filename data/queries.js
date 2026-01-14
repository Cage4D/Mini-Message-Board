const pool = require("./pool")

async function retrieveAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows;
}

async function writeMessage({ text, author }) {
    const SQL = `
    INSERT INTO messages (text, author, date)
    VALUES 
    ($1, $2, NOW());
    `
    await pool.query(SQL, [text, author])
}

module.exports = {
    retrieveAllMessages,
    writeMessage
}