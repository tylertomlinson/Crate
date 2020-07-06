// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
// These are the action types used by the Action Creators and reducers to communicate with Redux in the state.js file in this folder
export const PRODUCTS_GET_LIST_REQUEST = 'PRODUCTS/GET_LIST_REQUEST'
export const PRODUCTS_GET_LIST_RESPONSE = 'PRODUCTS/GET_LIST_RESPONSE'
export const PRODUCTS_GET_LIST_FAILURE = 'PRODUCTS/GET_LIST_FAILURE'
export const PRODUCTS_GET_LIST_RESET = 'PRODUCTS/GET_LIST_RESET'
export const PRODUCTS_GET_REQUEST = 'PRODUCTS/GET_REQUEST'
export const PRODUCTS_GET_RESPONSE = 'PRODUCTS/GET_RESPONSE'
export const PRODUCTS_GET_FAILURE = 'PRODUCTS/GET_FAILURE'
export const PRODUCTS_GET_RELATED_LIST_REQUEST = 'PRODUCTS/GET_RELATED_LIST_REQUEST'
export const PRODUCTS_GET_RELATED_LIST_RESPONSE = 'PRODUCTS/GET_RELATED_LIST_RESPONSE'
export const PRODUCTS_GET_RELATED_LIST_FAILURE = 'PRODUCTS/GET_RELATED_LIST_FAILURE'

// Actions

// Get list of products
export function getList(isLoading = true, forceRefresh = false) {
  // this is resetting any existing data in the current store 
  return dispatch => {
    dispatch({
      type: PRODUCTS_GET_LIST_REQUEST,
      error: null,
      isLoading
    })
    // Here we are making a query request to GraphQl, to return all products with the related fields of id, name, slug, description, image, createdAt and updatedAt
    return axios.post(routeApi, query({
      operation: 'products',
      fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt', 'updatedAt']
    }))

    // If the resposne if ok we are then saving this information to the redux store
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: PRODUCTS_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.products
          })
        } else {
          dispatch({
            type: PRODUCTS_GET_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
        }
      })
      .catch(error => {
        dispatch({
          type: PRODUCTS_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single product

// this function is realted to a single product
export function get(slug, isLoading = true) {
  return dispatch => {
    dispatch({
      type: PRODUCTS_GET_REQUEST,
      isLoading
    })
    // This query is provided a variable 'slug' to specify which specific item we want to be returned from the query
    return axios.post(routeApi, query({
      operation: 'product',
      variables: { slug },
      fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']
    }))
    // If the response returns an error, we save the error to the store, if everything is ok, the response date is saved to the store
      .then(response => {
        if (response.status === 200) {
          if (response.data.errors && response.data.errors.length > 0) {
            dispatch({
              type: PRODUCTS_GET_FAILURE,
              error: response.data.errors[0].message,
              isLoading: false
            })
          } else {
            dispatch({
              type: PRODUCTS_GET_RESPONSE,
              error: null,
              isLoading: false,
              item: response.data.data.product
            })
          }
        } else {
          dispatch({
            type: PRODUCTS_GET_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
        }
      })
      .catch(error => {
        dispatch({
          type: PRODUCTS_GET_FAILURE,
          error: error,
          isLoading: false
        })
      })
  }
}

// Get single product by Id
// Here we are doing the same as above, but because we know the id, we avoid the error handling and save the fethed product information directly to the store
export function getById(productId) {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'productById',
      variables: { productId },
      fields: ['id', 'name', 'slug', 'description', 'image', 'type', 'gender']
    }))
  }
}

// Get list of products related to a product
export function getRelatedList(productId, isLoading = true) {
  return (dispatch, getState) => {
    let state = getState()

    if (state.productsRelated.list.length === 0 || state.productId !== productId) {
      dispatch({
        type: PRODUCTS_GET_RELATED_LIST_REQUEST,
        error: null,
        isLoading
      })

      return axios.post(routeApi, query({
        operation: 'productsRelated',
        variables: { productId },
        fields: ['id', 'name', 'slug', 'description', 'image']
      }))
        .then(response => {
          if (response.status === 200) {
            dispatch({
              type: PRODUCTS_GET_RELATED_LIST_RESPONSE,
              error: null,
              isLoading: false,
              list: response.data.data.productsRelated,
              productId
            })
          } else {
            dispatch({
              type: PRODUCTS_GET_RELATED_LIST_FAILURE,
              error: 'Some error occurred. Please try again.',
              isLoading: false
            })
          }
        })
        .catch(error => {
          dispatch({
            type: PRODUCTS_GET_RELATED_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
        })
    }
  }
}

// Create or update product
export function createOrUpdate(product) {
  if (product.id > 0) {
    return update(product)
  } else {
    delete product.id
    return create(product)
  }
}

// Create product
export function create(product) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'productCreate',
      variables: product,
      fields: ['id']
    }))
  }
}

// Update product
export function update(product) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'productUpdate',
      variables: product,
      fields: ['id']
    }))
  }
}

// Remove product
export function remove(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'productRemove',
      variables,
      fields: ['id']
    }))
  }
}

// Get product types
export function getTypes() {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'productTypes',
      fields: ['id', 'name']
    }))
  }
}
