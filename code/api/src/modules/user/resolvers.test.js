// import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import create from './resolvers.js'

const supertest = require('supertest')
describe("test user sign up", () => {
  it("can sign up as new user", async () => {
    const response = await supertest(express).post('/user/signup')
    .send({
			name: 'Name',
			email: 'email',
			password: '123',
      role: "user",
      style: "",
      gender: 1
		});

    expect(response.status).toBe(200);
		expect(response.body.status).toBe('success');
		expect(response.body.message).toBe('Signed up successfully.');
  })
})
