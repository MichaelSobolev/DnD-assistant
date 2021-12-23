'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Traits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personality_traits: {
        type: Sequelize.TEXT
      },
      ideals: {
        type: Sequelize.TEXT
      },
      bonds: {
        type: Sequelize.TEXT
      },
      flaws: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Traits');
  }
};
