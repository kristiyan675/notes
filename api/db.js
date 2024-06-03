const { Pool } = require("pg");

// db config
// !! Update with personal credentials !!
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "notes",
  password: "root",
  port: 5432,
});

module.exports = pool;
