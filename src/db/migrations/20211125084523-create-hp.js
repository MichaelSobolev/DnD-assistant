'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.INTEGER
      },
      max_hp: {
        type: Sequelize.INTEGER
      },
      hit_dice: {
        type: Sequelize.JSON
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
    await queryInterface.dropTable('Hps');
  }
};
