import axios from 'axios';
import testApp from '../src/testApp';

describe('bar', () => {
  test('Should be able to make requests against the app', async () => {
    const response = await axios.get(
      `http://localhost:${testApp.config.port}/api/users`,
    );
    expect(response.data.users).toHaveLength(1);
    const { id, email } = response.data.users[0];

    expect(response.status).toEqual(200);
    expect({ id, email }).toEqual({
      id: 1,
      email: 'user@test.com',
    });
  });

  test('Should be able to isolate tests', async () => {
    const user = await testApp.test(async app => {
      return await app.models.User.query()
        .insert({
          email: 'user1@test.com',
          password: 'password',
        })
        .returning('*');
    });

    expect(user.email).toEqual('user1@test.com');
  });
});
