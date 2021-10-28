'use strict'

const { hash } = require('../../helpers/cipher');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Manolo',
          lastname: 'Silva',
          email: 'manolo@email.com',
          password: hash('12345'),
          state: 'São Paulo',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
}
