const { DataTypes } = require('sequelize');
const db = require('../db/conn');

  const User = db.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    cpf: {
      type: DataTypes.BIGINT,
      allowNull: false,
      require: true
    },
    ac_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
      require: true,
      defaultValue: 10
    },
    stat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      require: true,
      defaultValue: 1
    },
  });

module.exports = User;