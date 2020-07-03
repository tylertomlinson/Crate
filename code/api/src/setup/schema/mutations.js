// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
//imports root mutations for each model and assigns them as variables
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'

// Mutation
//compiles mutations for all of the models and assigns all model fields as part of the mutation schema
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

//exports query so that root mutations can be called by GraphQL API
export default mutation
