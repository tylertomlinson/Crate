// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
//location where ProductTypes are defined
import { ProductType } from './types'
// create, update, and remove are possible ways to resolve the root mutations are imported from this location
import { create, update, remove } from './resolvers'

// Product create
//Root mutation to create new product; name, slug, description, type, gender,
//and image are required arguments
export const productCreate = {
  type: ProductType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    slug: {
      name: 'slug',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    },

    type: {
      name: 'type',
      type: GraphQLInt
    },

    gender: {
      name: 'gender',
      type: GraphQLInt
    },

    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: create
}

// Product update
//Root mutation to update a product; id, name, slug, description, type, gender,
//and image are fields that can be updated
export const productUpdate = {
  type: ProductType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    slug: {
      name: 'slug',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    },

    type: {
      name: 'type',
      type: GraphQLInt
    },

    gender: {
      name: 'gender',
      type: GraphQLInt
    },

    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: update
}

// Product remove
//Root mutation to delete product from database. Passes in id to location / delete product object.
export const productRemove = {
  type: ProductType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
