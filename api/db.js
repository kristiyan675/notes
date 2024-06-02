const { Pool } = require("pg");

// db config
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "notes",
  password: "root",
  port: 5432,
});

module.exports = pool;
