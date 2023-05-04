const { DataTypes } = require('sequelize');
const db = require('../db/conn');

// module.exports = (sequelize, DataTypes) => {

  const User = db.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    cpf: {
      type: DataTypes.BIGINT,
      allowNull: false,
      required: true
    },
    ac_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
      required: true,
      defaultValue: 10
    },
    stat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      required: true,
      defaultValue: 1
    },
  });

module.exports = User;
//   return User;
// };