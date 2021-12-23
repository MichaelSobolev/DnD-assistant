'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Skill_proficiencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      athletics: {
        type: Sequelize.BOOLEAN
      },
      acrobatics: {
        type: Sequelize.BOOLEAN
      },
      sleight_of_hand: {
        type: Sequelize.BOOLEAN
      },
      stealth: {
        type: Sequelize.BOOLEAN
      },
      arcana: {
        type: Sequelize.BOOLEAN
      },
      history: {
        type: Sequelize.BOOLEAN
      },
      investigation: {
        type: Sequelize.BOOLEAN
      },
      nature: {
        type: Sequelize.BOOLEAN
      },
      religion: {
        type: Sequelize.BOOLEAN
      },
      animal_handling: {
        type: Sequelize.BOOLEAN
      },
      insight: {
        type: Sequelize.BOOLEAN
      },
      medicine: {
        type: Sequelize.BOOLEAN
      },
      perception: {
        type: Sequelize.BOOLEAN
      },
      survival: {
        type: Sequelize.BOOLEAN
      },
      deception: {
        type: Sequelize.BOOLEAN
      },
      intimidation: {
        type: Sequelize.BOOLEAN
      },
      performance: {
        type: Sequelize.BOOLEAN
      },
      persuasion: {
        type: Sequelize.BOOLEAN
      },
      sheet_id: {
        allow_null: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Sheets'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Skill_proficiencies');
  }
};
