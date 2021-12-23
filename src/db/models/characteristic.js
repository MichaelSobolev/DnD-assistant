'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Characteristic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Sheet}) {
      this.belongsTo(Sheet, { foreignKey: 'sheet_id' })
    }
  }
  Characteristic.init({
    str: DataTypes.STRING,
    dex: DataTypes.STRING,
    con: DataTypes.STRING,
    wis: DataTypes.STRING,
    int: DataTypes.STRING,
    cha: DataTypes.STRING,
    sheet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Characteristic',
  });
  return Characteristic;
};
