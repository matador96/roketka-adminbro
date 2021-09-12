const mode = process.env.NODE_ENV || "development";

const config = {
  development: {
    database: {
      username: "root",
      password: "",
      database: "roketka_beta",
      host: "localhost",
      db_port: "3306",
    },
    port: "3003",
  },
  production: {
    database: {
      host: process.env.MYSQL_HOST_IP || "localhost",
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DATABASE,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    port: process.env.SERVER_PORT || 8080,
  },
};

module.exports = config[mode];
