'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('crates', [
      {
        name: 'Clothes',
        description: 'A monthly supply of trendy clothes.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Accessories',
        description: 'A monthly supply of trendy accessories.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothes and Accessories',
        description: 'A monthly supply of trendy clothes and accessories.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crates', null, {});
  }
}
