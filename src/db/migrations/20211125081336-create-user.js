'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allow_null: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allow_null: false,
      },
      nickname: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.TEXT
      },
      bio: {
        type: Sequelize.TEXT
      },
      isAdmin: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Users');
  }
};
