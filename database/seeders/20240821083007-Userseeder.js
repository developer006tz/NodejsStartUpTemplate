'use strict';
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: uuidv4(),
          email: 'admin@admin.com',
          fullName: 'Aisha Kikari',
          phone: '0746828843',
          username: 'admin',
          password: bcrypt.hashSync('admin', 10),
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    
  },

  async down (queryInterface, Sequelize) {
   
  }
};
