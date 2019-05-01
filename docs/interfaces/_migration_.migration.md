[ts-app](../README.md) > ["Migration"](../modules/_migration_.md) > [Migration](../interfaces/_migration_.migration.md)

# Interface: Migration

A knex migration.

## Hierarchy

**Migration**

## Index

### Properties

* [config](_migration_.migration.md#config)
* [name](_migration_.migration.md#name)

### Methods

* [down](_migration_.migration.md#down)
* [up](_migration_.migration.md#up)

---

## Properties

<a id="config"></a>

### `<Optional>` config

**● config**: *`MigratorConfig`*

*Defined in [Migration.ts:11](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/Migration.ts#L11)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [Migration.ts:10](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/Migration.ts#L10)*

Migration name. Used by knex to keep track of which migrations have been run.

___

## Methods

<a id="down"></a>

###  down

▸ **down**(knex: *`Knex`*): `any`

*Defined in [Migration.ts:21](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/Migration.ts#L21)*

Called when rolling back.

**Parameters:**

| Name | Type |
| ------ | ------ |
| knex | `Knex` |

**Returns:** `any`

___
<a id="up"></a>

###  up

▸ **up**(knex: *`Knex`*): `any`

*Defined in [Migration.ts:16](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/Migration.ts#L16)*

Called when migrating.

**Parameters:**

| Name | Type |
| ------ | ------ |
| knex | `Knex` |

**Returns:** `any`

___

