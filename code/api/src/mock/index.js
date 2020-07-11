const params = require('../config/params.json');

export const mockUser = {
  name: 'Test User',
  email: 'Testemail@crate.com',
  password: '123',
  role: params.user.roles.user,
  createdAt: new Date(),
  updatedAt: new Date()
}

export const user1 = {
  name: 'Test User1',
  email: 'Testemail1@crate.com',
  password: '123',
  role: params.user.roles.user,
  createdAt: new Date(),
  updatedAt: new Date()
  }

export const user2 = {
  name: 'Test User2',
  email: 'Testemail2@crate.com',
  password: '123',
  gender: 1,
  role: params.user.roles.user,
  createdAt: new Date(),
  updatedAt: new Date()
  }

export const user3 = {
  name: 'Test User3',
  email: 'Testemail3@test.com',
  password: '123',
  role: params.user.roles.user,
  style: 'casual',
  gender: 1,
  createdAt: new Date(),
  updatedAt: new Date()
  }

export const mockProduct = {
  name: 'Belt for Women',
  slug: 'belt-for-women',
  description: 'A very nice belt for women.',
  type: params.product.types.accessory.id,
  gender: params.user.gender.female.id,
  image: '/images/stock/belt-female.jpg',
  createdAt: new Date(),
  updatedAt: new Date()
}

export const mockCrate = {
  name: 'Clothes for Men',
  description: 'A monthly supply of trendy clothes for men.',
  createdAt: new Date(),
  updatedAt: new Date()
}
