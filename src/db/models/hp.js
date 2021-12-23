'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sheet }) {
      this.belongsTo(Sheet, { foreignKey: 'sheet_id' })
    }
  }
  Hp.init({
    hp: DataTypes.INTEGER,
    max_hp: DataTypes.INTEGER,
    hit_dice: DataTypes.JSON,
    sheet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hp',
  });
  return Hp;
};
