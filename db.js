const poolModule = require("pg").Pool;

const pool = new poolModule({
  user: "postgres",
  password: "123456$",
  database: "crudtest",
  host: "localhost",
  port: 5432
});

module.exports = pool;