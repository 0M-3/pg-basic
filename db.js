const Pool = require("pg").Pool;
require('dotenv').config();
const POSTGRES_PASSWORD = String(process.env.POSTGRES_PASSWORD);
const User = String(process.env.POSTGRES_USER);

const pool = new Pool({
    user: User,
    password: POSTGRES_PASSWORD,
    database: "todo_database",
    host: "localhost",
    port: 5432
});

module.exports = pool;