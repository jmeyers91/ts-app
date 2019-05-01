[ts-app](../README.md) > ["App"](../modules/_app_.md) > [App](../classes/_app_.app.md)

# Class: App

## Hierarchy

**App**

## Index

### Constructors

* [constructor](_app_.app.md#constructor)

### Properties

* [config](_app_.app.md#config)
* [database](_app_.app.md#database)
* [httpServer](_app_.app.md#httpserver)
* [models](_app_.app.md#models)
* [webserver](_app_.app.md#webserver)

### Methods

* [listen](_app_.app.md#listen)
* [migrate](_app_.app.md#migrate)
* [rollback](_app_.app.md#rollback)
* [seed](_app_.app.md#seed)
* [stop](_app_.app.md#stop)
* [test](_app_.app.md#test)
* [transaction](_app_.app.md#transaction)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new App**(config: *[AppConfig](../interfaces/_appconfig_.appconfig.md)*): [App](_app_.app.md)

*Defined in [App.ts:36](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [AppConfig](../interfaces/_appconfig_.appconfig.md) |

**Returns:** [App](_app_.app.md)

___

## Properties

<a id="config"></a>

###  config

**● config**: *[AppConfig](../interfaces/_appconfig_.appconfig.md)*

*Defined in [App.ts:38](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L38)*

___
<a id="database"></a>

###  database

**● database**: *`Knex`*

*Defined in [App.ts:29](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L29)*

Knex SQL query builder. See: [https://knexjs.org/](https://knexjs.org/)

___
<a id="httpserver"></a>

### `<Private>` httpServer

**● httpServer**: *`HttpServer` \| `null`*

*Defined in [App.ts:36](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L36)*

___
<a id="models"></a>

###  models

**● models**: *`object`*

*Defined in [App.ts:35](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L35)*

Objection models. See: [http://vincit.github.io/objection.js/](http://vincit.github.io/objection.js/)

#### Type declaration

 User: [User](_models_user_model_.user.md)

___
<a id="webserver"></a>

###  webserver

**● webserver**: *`Koa`*

*Defined in [App.ts:23](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L23)*

Koa webserver. See: [https://koajs.com/](https://koajs.com/)

___

## Methods

<a id="listen"></a>

###  listen

▸ **listen**(): `Promise`<`void`>

*Defined in [App.ts:56](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L56)*

Start listening for API requests.

**Returns:** `Promise`<`void`>

___
<a id="migrate"></a>

###  migrate

▸ **migrate**(): `Promise`<`string`[]>

*Defined in [App.ts:155](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L155)*

Run database migrations.

**Returns:** `Promise`<`string`[]>

___
<a id="rollback"></a>

###  rollback

▸ **rollback**(): `Promise`<`void`>

*Defined in [App.ts:171](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L171)*

Roll database back to last migration.

**Returns:** `Promise`<`void`>

___
<a id="seed"></a>

###  seed

▸ **seed**(): `Promise`<`void`>

*Defined in [App.ts:162](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L162)*

Run database seed functions.

**Returns:** `Promise`<`void`>

___
<a id="stop"></a>

###  stop

▸ **stop**(): `Promise`<`void`>

*Defined in [App.ts:84](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L84)*

Stop the app. Disconnects the database and webserver.

**Returns:** `Promise`<`void`>

___
<a id="test"></a>

###  test

▸ **test**<`T`>(body: *`function`*, overrideConfig?: *`Partial`<[AppConfig](../interfaces/_appconfig_.appconfig.md)>*): `Promise`<`T`>

*Defined in [App.ts:128](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L128)*

Like `transaction`, but rolls back even if the body runs successfully.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `function` |
| `Optional` overrideConfig | `Partial`<[AppConfig](../interfaces/_appconfig_.appconfig.md)> |

**Returns:** `Promise`<`T`>

___
<a id="transaction"></a>

###  transaction

▸ **transaction**(body: *`function`*, overrideConfig?: *`Partial`<[AppConfig](../interfaces/_appconfig_.appconfig.md)>*): `Promise`<`void`>

*Defined in [App.ts:106](https://github.com/jmeyers91/ts-app/blob/0a84084/src/App.ts#L106)*

Start an app-level transaction. The passed function receives the transaction bound app. Optionally pass config overrides as the second argument. Returns a promise that resolves when the transaction body finishes running.

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `function` |
| `Optional` overrideConfig | `Partial`<[AppConfig](../interfaces/_appconfig_.appconfig.md)> |

**Returns:** `Promise`<`void`>

___

