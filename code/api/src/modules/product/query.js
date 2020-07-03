// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
//location where ProductTypes are defined
import { ProductType, ProductTypesType } from './types'
// create, update, and remove are possible ways to resolve the root mutations are imported from this location
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

// Products All
// Root query; calls getAll function to resolve, returns list of all products when called
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}

// Product By slug
// Root query calls getBySlug function to resolve, needs a slug as an argument, returns one product
// with matching slug string
export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Product By ID
// Root query calls getById function to resolve, needs product id as an argument, returns one product
// with matching productID
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// Products Related
// Root query calls getRelated function to resolve, needs productId as an argument, returns list of all related products
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Product Types
// Root query calls getTypes function to resolve, doesn't need an argument, returns list of product
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}
