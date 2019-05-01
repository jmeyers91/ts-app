
[![Build Status](https://travis-ci.com/jmeyers91/ts-app.svg?branch=master)](https://travis-ci.com/jmeyers91/ts-app)

Setup
=====

Clone and install node dependencies.

```
git clone https://github.com/jmeyers91/ts-app.git
cd ts-app
npm install
```

Setup your custom env. See the [env docs](docs/modules/_env_.md) for more info.

```
cp .env.example .env
```

Scripts
-------

### Start

Start the server. Watches and restarts on file changes in dev environments.

```
npm run start
```

### Migrate

Run database migrations.

```
npm run migrate
```

### Seed

Run database seeds.

```
npm run seed
```

### Test

```
npm run test
```

### Scaffold project files (models, migrations, routers, etc.)

```
plop
```

### Generate documentation

```
npm run create-docs
```

## Index

### External modules

* ["App"](modules/_app_.md)
* ["AppConfig"](modules/_appconfig_.md)
* ["Migration"](modules/_migration_.md)
* ["Model"](modules/_model_.md)
* ["Router"](modules/_router_.md)
* ["Seed"](modules/_seed_.md)
* ["defaultConfig"](modules/_defaultconfig_.md)
* ["entries/migrate"](modules/_entries_migrate_.md)
* ["entries/rollback"](modules/_entries_rollback_.md)
* ["entries/seed"](modules/_entries_seed_.md)
* ["entries/start"](modules/_entries_start_.md)
* ["env"](modules/_env_.md)
* ["migrations/20190428164519_create_user_table.migration"](modules/_migrations_20190428164519_create_user_table_migration_.md)
* ["migrations/index"](modules/_migrations_index_.md)
* ["models/User.model"](modules/_models_user_model_.md)
* ["models/index"](modules/_models_index_.md)
* ["routers/index"](modules/_routers_index_.md)
* ["routers/user.router"](modules/_routers_user_router_.md)
* ["seeds/createUsers.seed"](modules/_seeds_createusers_seed_.md)
* ["seeds/index"](modules/_seeds_index_.md)
* ["testApp"](modules/_testapp_.md)
* ["utils/checkPassword"](modules/_utils_checkpassword_.md)
* ["utils/fail"](modules/_utils_fail_.md)
* ["utils/hashPassword"](modules/_utils_hashpassword_.md)
* ["utils/knexUtils"](modules/_utils_knexutils_.md)
* ["utils/noop"](modules/_utils_noop_.md)

---

