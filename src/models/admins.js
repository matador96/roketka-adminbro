const Sequelize = require("sequelize");
const sequelize = require("../config/db");

module.exports = sequelize.define(
  "admins",
  {
    id: {
      field: "id",
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    email: {
      field: "email",
      type: Sequelize.STRING,
      primaryKey: true,
      required: true,
    },
    role: {
      field: "role",
      type: Sequelize.ENUM("admin", "trader"),
      required: true,
    },
    encryptedPassword: {
      field: "encryptedPassword",
      type: Sequelize.STRING,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);
