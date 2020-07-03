// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
//imports root queries for each model and assigns them as variables
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as crate from '../../modules/crate/query'
import * as subscription from '../../modules/subscription/query'

// Query
//compiles queries for all of the models and assigns all model fields as part of the mutation template
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    ...user,
    ...product,
    ...crate,
    ...subscription
  })
})

//exports query so that root queries can be called by GraphQL API
export default query
