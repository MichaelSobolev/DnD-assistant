'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sheets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      subclass: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      subrace: {
        type: Sequelize.STRING
      },
      inspiration: {
        type: Sequelize.BOOLEAN
      },
      user_id: {
        allow_null: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
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
    await queryInterface.dropTable('Sheets');
  }
};
