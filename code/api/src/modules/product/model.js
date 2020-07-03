'use strict'

//Model sets Product table attributes
//Sequelize is an ORM mapper for the database
// Product
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    //name field is a string
    name: {
      type: DataTypes.STRING
    },
    //slug field is a string
    slug: {
      type: DataTypes.STRING
    },
    //description field is a string
    description: {
      type: DataTypes.TEXT
    },
    //type field is an integer
    type: {
      type: DataTypes.INTEGER
    },
    //gender field is an integer; male is 1 and female is 2
    gender: {
      type: DataTypes.INTEGER
    },
    //image field is a string for a url to the image location
    image: {
      type: DataTypes.TEXT
    }
  })
}
