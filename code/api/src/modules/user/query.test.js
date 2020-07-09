import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe ("user queries", () => {
  let server;
  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema:schema,
        graphiql:false
      })
    );
  });

  it("is true", () => {
    expect(true).toBe(true)
  })

  it("returns all users", async() => {
    const response= await request(server)
    .get('/')
    .send({ query: '{ users { name email } }'})
    .expect(200)

    expect(response.body.data.users.length).toEqual(3)
  })

  it("returns users gender", async() => {
    const response= await request(server)
    .get('/')
    .send({ query: '{ users { gender } }'})
    .expect(200)

    expect(response.body.data.users[2]).toEqual({"gender": 1})
  })
})
