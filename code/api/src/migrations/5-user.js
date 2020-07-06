'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([ queryInterface.addColumn(
              'users',
              'style',
              Sequelize.STRING
             ),
            queryInterface.addColumn(
             'users',
             'gender',
             Sequelize.INTEGER
          )]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
