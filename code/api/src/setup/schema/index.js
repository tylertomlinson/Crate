//file where GraphQL API structure starts

// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
//locations of files needed for schema
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  //implementation of variables imported above
  query,
  mutation
})

export default schema
