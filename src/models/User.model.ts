import Model from '../Model';

export default class User extends Model {
  static tableName = 'app_user';

  static jsonSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      id: { type: 'integer' },
      email: { type: 'string' },
      password: { type: 'string' },
    },
  };

  static relationMappings = {};

  id!: number;
  email!: string;
  password!: string;
  createdAt!: string;
  updatedAt!: string;
}
