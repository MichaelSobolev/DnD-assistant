'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sheet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Characteristic, Save_proficiency, Skill_proficiency, Hp, Trait, Feat }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.hasMany(Characteristic, { foreignKey: 'sheet_id' })
      this.hasMany(Save_proficiency, { foreignKey: 'sheet_id' })
      this.hasMany(Skill_proficiency, { foreignKey: 'sheet_id' })
      this.hasMany(Hp, { foreignKey: 'sheet_id' })
      this.hasMany(Trait, { foreignKey: 'sheet_id' })
      this.hasMany(Feat, { foreignKey: 'sheet_id' })
    }
  }



  Sheet.init({
    name: DataTypes.STRING,
    class: DataTypes.STRING,
    subclass: DataTypes.STRING,
    race: DataTypes.STRING,
    subrace: DataTypes.STRING,
    inspiration: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sheet',
  });
  return Sheet;
};
