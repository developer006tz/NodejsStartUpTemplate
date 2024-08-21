'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable(
        'Users',
        {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
          },
          fullName: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          phone: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          email: {
            type: Sequelize.STRING,
          },
          role: {
            allowNull: false,
            defaultValue: 'admin',
            type: Sequelize.ENUM('admin', 'author', 'user'),
          },
          photo: {
            type: Sequelize.STRING,
          },
          username: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true,
          },
          password: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          status: {
            allowNull: false,
            defaultValue: 'active',
            type: Sequelize.ENUM('active', 'inactive'),
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        { transaction: t }
      );
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
