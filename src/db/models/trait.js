'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trait extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sheet }) {
      this.belongsTo(Sheet, { foreignKey: 'sheet_id' })
    }
  }
  Trait.init({
    personality_traits: DataTypes.TEXT,
    ideals: DataTypes.TEXT,
    bonds: DataTypes.TEXT,
    flaws: DataTypes.TEXT,
    sheet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trait',
  });
  return Trait;
};
