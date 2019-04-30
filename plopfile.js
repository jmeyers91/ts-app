const path = require('path');
const templatePath = p => path.join(__dirname, 'plop-templates', p);

module.exports = plop => {
  plop.setGenerator('migration', {
    description: 'Create a migration',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'migration name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/migrations/{{> timestamp}}_{{snakeCase name}}.migration.ts',
        templateFile: templatePath('migration.hbs'),
      },
    ],
  });

  plop.setGenerator('model', {
    description: 'Create a model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Model name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/models/{{properCase name}}.model.ts',
        templateFile: templatePath('model.hbs'),
      },
    ],
  });

  plop.setGenerator('seed', {
    description: 'Create a database seed',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Seed name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/seeds/{{camelCase name}}.seed.ts',
        templateFile: templatePath('seed.hbs'),
      },
    ],
  });

  plop.setGenerator('router', {
    description: 'Create a router',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'router name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'routes/{{camelCase name}}.router.ts',
        templateFile: templatePath('router.hbs'),
      },
    ],
  });

  plop.setGenerator('test', {
    description: 'Create a test',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Test name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'tests/{{name}}.test.ts',
        templateFile: templatePath('test.hbs'),
      },
    ],
  });

  // Used to create timestamp based migration file names
  const now = new Date();
  plop.setPartial(
    'timestamp',
    now.getFullYear().toString() +
      zeroPad(now.getMonth() + 1, 2) +
      zeroPad(now.getDate(), 2) +
      zeroPad(now.getHours(), 2) +
      zeroPad(now.getMinutes(), 2) +
      zeroPad(now.getSeconds(), 2),
  );
};

function zeroPad(number, length) {
  number = '' + number;
  while (number.length < length) {
    number = '0' + number;
  }
  return number;
}
