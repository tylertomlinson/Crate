// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLObject } from 'graphql'

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    gender: { type: GraphQLString },
    role: { type: GraphQLString },
    style: { type: GraphQLString },
    gender: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  })
})

// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

// //User Results Type
// const UserResultsType = new GraphQLObjectType({
//   name: 'userResults',
//   description: 'User Results Type',
//
//   fields:() => ({
//     id: { type: GraphQLInt },
//
//     { tops: { type: GraphQLInt },
//     bottoms: { type: GraphQLInt },
//     dresses: { type: GraphQLInt },
//     accessories: { type: GraphQLInt },
//     shoes: { type: GraphQLInt }}
//   })
// })

export { UserType, UserLoginType, UserGenderType }
