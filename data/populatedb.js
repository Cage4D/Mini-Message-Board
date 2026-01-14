const { Client } = require("pg")
require("dotenv").config()

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text TEXT NOT NULL,
        author VARCHAR ( 255 ) NOT NULL,
        date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO messages (text, author)
    VALUES 
    ('Hi there!', 'AMANDO'),
    ('Hello World!', 'Charles');
`;

async function main() {
    console.log("seeding....")
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING,
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log("done")
}

main()