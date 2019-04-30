import Seed from '../Seed';
import hashPassword from '../utils/hashPassword';

const createUsers: Seed = async app => {
  const { User } = app.models;

  await User.query().insert([
    {
      email: 'user@test.com',
      password: await hashPassword('secret'),
    },
  ]);
};

export default createUsers;
