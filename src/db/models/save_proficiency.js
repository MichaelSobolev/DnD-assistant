'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Save_proficiency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sheet }) {
      this.belongsTo(Sheet, { foreignKey: 'sheet_id' })
    }
  }
  Save_proficiency.init({
    str: DataTypes.BOOLEAN,
    dex: DataTypes.BOOLEAN,
    con: DataTypes.BOOLEAN,
    wis: DataTypes.BOOLEAN,
    int: DataTypes.BOOLEAN,
    cha: DataTypes.BOOLEAN,
    sheet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Save_proficiency',
  });
  return Save_proficiency;
};

 
