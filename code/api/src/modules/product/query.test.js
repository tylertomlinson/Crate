import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe ("product queries", () => {
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
})
