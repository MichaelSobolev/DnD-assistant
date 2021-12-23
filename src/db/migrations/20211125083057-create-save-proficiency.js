'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Save_proficiencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      str: {
        type: Sequelize.BOOLEAN
      },
      dex: {
        type: Sequelize.BOOLEAN
      },
      con: {
        type: Sequelize.BOOLEAN
      },
      wis: {
        type: Sequelize.BOOLEAN
      },
      int: {
        type: Sequelize.BOOLEAN
      },
      cha: {
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
    await queryInterface.dropTable('Save_proficiencies');
  }
};
