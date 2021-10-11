import { Sequelize, Model, DataTypes } from "sequelize";

export default (sequelize) => {
  const Todo = sequelize.define("Todo", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING(100),
    version: Sequelize.BIGINT,
  });

  return Todo;
};
