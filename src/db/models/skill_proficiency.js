'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill_proficiency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sheet }) {
      this.belongsTo(Sheet, { foreignKey: 'sheet_id' })
    }
  }
  Skill_proficiency.init({
    athletics: DataTypes.BOOLEAN,
    acrobatics: DataTypes.BOOLEAN,
    sleight_of_hand: DataTypes.BOOLEAN,
    stealth: DataTypes.BOOLEAN,
    arcana: DataTypes.BOOLEAN,
    history: DataTypes.BOOLEAN,
    investigation: DataTypes.BOOLEAN,
    nature: DataTypes.BOOLEAN,
    religion: DataTypes.BOOLEAN,
    animal_handling: DataTypes.BOOLEAN,
    insight: DataTypes.BOOLEAN,
    medicine: DataTypes.BOOLEAN,
    perception: DataTypes.BOOLEAN,
    survival: DataTypes.BOOLEAN,
    deception: DataTypes.BOOLEAN,
    intimidation: DataTypes.BOOLEAN,
    performance: DataTypes.BOOLEAN,
    persuasion: DataTypes.BOOLEAN,
    sheet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skill_proficiency',
  });
  return Skill_proficiency;
};
