'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Characteristics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      str: {
        type: Sequelize.STRING
      },
      dex: {
        type: Sequelize.STRING
      },
      con: {
        type: Sequelize.STRING
      },
      wis: {
        type: Sequelize.STRING
      },
      int: {
        type: Sequelize.STRING
      },
      cha: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Characteristics');
  }
};
