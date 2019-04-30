[learn-jenkins](../README.md) > ["env"](../modules/_env_.md)

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

*Defined in [env.ts:27](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/env.ts#L27)*

___
<a id="port"></a>

### `<Const>` PORT

**● PORT**: *`string`* =  env.PORT || '8080'

*Defined in [env.ts:23](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/env.ts#L23)*

___
<a id="test_database_url"></a>

### `<Const>` TEST_DATABASE_URL

**● TEST_DATABASE_URL**: *`undefined` \| `string`* =  env.TEST_DATABASE_URL

*Defined in [env.ts:29](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/env.ts#L29)*

___
<a id="test_port"></a>

### `<Const>` TEST_PORT

**● TEST_PORT**: *`string`* =  env.TEST_PORT || '8081'

*Defined in [env.ts:25](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/env.ts#L25)*

___
<a id="env"></a>

### `<Const>` env

**● env**: *`ProcessEnv`* =  process.env

*Defined in [env.ts:4](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/env.ts#L4)*

___
<a id="isdev"></a>

### `<Const>` isDev

**● isDev**: *`boolean`* =  env.NODE_ENV === 'development'

*Defined in [env.ts:8](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/env.ts#L8)*

___
<a id="isprod"></a>

### `<Const>` isProd

**● isProd**: *`boolean`* =  env.NODE_ENV === 'production'

*Defined in [env.ts:9](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/env.ts#L9)*

___
<a id="istest"></a>

### `<Const>` isTest

**● isTest**: *`boolean`* =  env.NODE_ENV === 'test'

*Defined in [env.ts:7](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/env.ts#L7)*

___

