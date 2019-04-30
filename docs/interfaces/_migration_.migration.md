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

*Defined in [Migration.ts:8](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/Migration.ts#L8)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [Migration.ts:7](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/Migration.ts#L7)*

___

## Methods

<a id="down"></a>

###  down

▸ **down**(knex: *`Knex`*): `any`

*Defined in [Migration.ts:10](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/Migration.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| knex | `Knex` |

**Returns:** `any`

___
<a id="up"></a>

###  up

▸ **up**(knex: *`Knex`*): `any`

*Defined in [Migration.ts:9](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/Migration.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| knex | `Knex` |

**Returns:** `any`

___

