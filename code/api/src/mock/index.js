const params = require('../config/params.json');

export const mockUser = {
  name: 'Test User',
  email: 'Testemail@crate.com',
  password: '123',
  role: params.user.roles.user,
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
