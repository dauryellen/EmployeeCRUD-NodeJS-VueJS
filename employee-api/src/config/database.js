/**
 * arquivo responsável pela connectionString
 */

const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

// conexão com a base de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("error", (error, client) => {
  console.log("Unexpected error on idle client", error);
  process.exit(-1);
});

pool.on("connect", () => {
  console.log("A base de dados foi conectada com sucesso.");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
