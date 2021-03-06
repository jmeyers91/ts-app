[ts-app](../README.md) > ["env"](../modules/_env_.md)

# External module: "env"

## Index

### Variables

* [DATABASE_URL](_env_.md#database_url)
* [PORT](_env_.md#port)
* [TEST_DATABASE_URL](_env_.md#test_database_url)
* [TEST_PORT](_env_.md#test_port)
* [env](_env_.md#env)
* [isDev](_env_.md#isdev)
* [isProd](_env_.md#isprod)
* [isTest](_env_.md#istest)

---

## Variables

<a id="database_url"></a>

### `<Const>` DATABASE_URL

**● DATABASE_URL**: *`string`* =  env.DATABASE_URL

*Defined in [env.ts:54](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/env.ts#L54)*

PostgreSQL database URL for storing models.

___
<a id="port"></a>

### `<Const>` PORT

**● PORT**: *`string`* =  env.PORT || '8080'

*Defined in [env.ts:43](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/env.ts#L43)*

Port the API server should listen on. Defaults to 8080.

___
<a id="test_database_url"></a>

### `<Const>` TEST_DATABASE_URL

**● TEST_DATABASE_URL**: *`undefined` \| `string`* =  env.TEST_DATABASE_URL

*Defined in [env.ts:59](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/env.ts#L59)*

PostgreSQL database URL for storing models in tests.

___
<a id="test_port"></a>

### `<Const>` TEST_PORT

**● TEST_PORT**: *`string`* =  env.TEST_PORT || '8081'

*Defined in [env.ts:49](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/env.ts#L49)*

Port the API server should listen on during tests. Defaults to 8081

___
<a id="env"></a>

### `<Const>` env

**● env**: *`ProcessEnv`* =  process.env

*Defined in [env.ts:8](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/env.ts#L8)*

`process.env` with defaults loaded from the `.env` file if it exists.

___
<a id="isdev"></a>

### `<Const>` isDev

**● isDev**: *`boolean`* =  env.NODE_ENV === 'development'

*Defined in [env.ts:20](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/env.ts#L20)*

Is the app running in a development environment.

___
<a id="isprod"></a>

### `<Const>` isProd

**● isProd**: *`boolean`* =  env.NODE_ENV === 'production'

*Defined in [env.ts:25](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/env.ts#L25)*

Is the app running in a production environment.

___
<a id="istest"></a>

### `<Const>` isTest

**● isTest**: *`boolean`* =  env.NODE_ENV === 'test'

*Defined in [env.ts:15](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/env.ts#L15)*

Is the app running in a test environment. If true, the test database and port variables will be used.

___

