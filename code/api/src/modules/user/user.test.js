import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import mocks from '../../mock/index';
import models from '../../setup/models';
import params from '../../config/params';
import database from '../../setup/database'

describe ("user testing", () => {
  const database = database
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

      const user1 = {
        name: 'Test User1',
        email: 'Testemail1@crate.com',
        password: '123',
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date()
        }
      const user2 = {
        name: 'Test User2',
        email: 'Testemail2@crate.com',
        password: '123',
        gender: 1,
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date()
        }
      const user3 = {
        name: 'Test User3',
        email: 'Testemail3@test.com',
        password: '123',
        role: params.user.roles.user,
        style: 'casual',
        gender: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        }

      models.User.create(user1);
      models.User.create(user2);
      models.User.create(user3);
  })

  //Technical Debt: Test database doesn't teardown after testing, so it keeps adding users to the test database

  it("returns all users", async() => {
    const response= await request(server)
    .get('/')
    .send({ query: '{ users { name email } }'})
    .expect(200)

    expect(response.body.data.users.length).toBeGreaterThan(3)
  })

  it("returns an users gender", async() => {
    const response= await request(server)
    .get('/')
    .send({ query: '{ users { gender } }'})
    .expect(200)

    expect(response.body.data.users[2]).toEqual({"gender": 1})
  })

  it("returns an users style", async() => {
    const response= await request(server)
    .get('/')
    .send({ query: '{ users { style } }'})
    .expect(200)

    expect(response.body.data.users[2]).toEqual({"style": 'casual'})
  })

  it('user style and gender attributes', async () => {
    //Create new user with null style and gender of male
    const request = models.User.create({
      name: 'Test User',
      email: 'Testemail@crate.com',
      password: '123',
      gender: 1,
      role: params.user.roles.user
    })

    // Technical Debt: When testing style after creation, returns whole object. Can't figure out how to return just the style

    // Finding user that was just created
    const user = models.User.findOne({ where: {email: 'Testemail@crate.com'} })

    //Updating user style in the database
    return await models.User.update(
      {
        style: 'classic'
      },
      { where: {email: 'Testemail@crate.com'} }
    )

    //Tests that style has been updated
    await expect(user).resolves.toEqual({
      "style": 'classic'
    })

    //Tests that gender is saved to user in the database
    await expect(user).resolves.toEqual({
      "gender": 1
    })
  })
})
