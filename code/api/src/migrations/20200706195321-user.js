'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([ queryInterface.addColumn(
              'users',
              'style', {
                type: Sequelize.STRING,
                defaultValue: "null"
                }
             ),
            queryInterface.addColumn(
             'users',
             'gender',
             Sequelize.INTEGER
          )]);
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
  }
};
