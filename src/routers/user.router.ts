import Router from '../Router';

export default new Router().get('/users', async context => {
  const { User } = context.core.models;
  const users = await User.query();

  context.response.status = 200;
  context.response.body = {
    users,
  };
});
