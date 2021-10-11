import { Sequelize } from "sequelize";

import todo from "./todo";

const sequelize = new Sequelize({
  database: "dev",
  username: "root",
  password: "12345678",
  host: "47.113.95.50",
  port: 3306,
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("数据库连接成功");
    await sequelize.sync();
  } catch (error) {
    throw new Error(error);
  }
})();

const model = {
  Todo: todo(sequelize),
};

export default model;
