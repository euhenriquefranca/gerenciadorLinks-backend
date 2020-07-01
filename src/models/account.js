const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

  //tabela
  const Account = sequelize.define('Account', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Account.prototype.toJSON = function() {
    const values = { ...this.get() };
    delete values.password;
    return values;
  }

  return Account;
};