'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    },
    style: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.INTEGER
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
