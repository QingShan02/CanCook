import { Pool } from "pg";

let db:any;

if (!db) {
  db = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    port: 5432,
    database: process.env.PGSQL_DATABASE,
  });
}

export default db;