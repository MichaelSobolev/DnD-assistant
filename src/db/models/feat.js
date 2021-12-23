'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Sheet }) {
      this.belongsTo(Sheet, { foreignKey: 'sheet_id' })
    }
  };
  Feat.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    sheet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Feat',
  });
  return Feat;
};
