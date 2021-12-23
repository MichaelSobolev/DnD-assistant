'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sheet }) {
      // define association here
      this.hasMany(Sheet, { foreignKey: 'user_id' })
    }

  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
    picture: DataTypes.TEXT,
    bio: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
