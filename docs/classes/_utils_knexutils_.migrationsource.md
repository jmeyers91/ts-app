[ts-app](../README.md) > ["utils/knexUtils"](../modules/_utils_knexutils_.md) > [MigrationSource](../classes/_utils_knexutils_.migrationsource.md)

# Class: MigrationSource

Knex migration source. Used to run knex migrations without the knex CLI.

## Hierarchy

**MigrationSource**

## Index

### Constructors

* [constructor](_utils_knexutils_.migrationsource.md#constructor)

### Properties

* [knex](_utils_knexutils_.migrationsource.md#knex)
* [migrations](_utils_knexutils_.migrationsource.md#migrations)

### Methods

* [getMigration](_utils_knexutils_.migrationsource.md#getmigration)
* [getMigrationName](_utils_knexutils_.migrationsource.md#getmigrationname)
* [getMigrations](_utils_knexutils_.migrationsource.md#getmigrations)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MigrationSource**(knex: *`Knex`*, migrations: *[Migration](../interfaces/_migration_.migration.md)[]*): [MigrationSource](_utils_knexutils_.migrationsource.md)

*Defined in [utils/knexUtils.ts:96](https://github.com/jmeyers91/ts-app/blob/a37a505/src/utils/knexUtils.ts#L96)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| knex | `Knex` |
| migrations | [Migration](../interfaces/_migration_.migration.md)[] |

**Returns:** [MigrationSource](_utils_knexutils_.migrationsource.md)

___

## Properties

<a id="knex"></a>

###  knex

**● knex**: *`Knex`*

*Defined in [utils/knexUtils.ts:98](https://github.com/jmeyers91/ts-app/blob/a37a505/src/utils/knexUtils.ts#L98)*

___
<a id="migrations"></a>

###  migrations

**● migrations**: *[Migration](../interfaces/_migration_.migration.md)[]*

*Defined in [utils/knexUtils.ts:99](https://github.com/jmeyers91/ts-app/blob/a37a505/src/utils/knexUtils.ts#L99)*

___

## Methods

<a id="getmigration"></a>

###  getMigration

▸ **getMigration**(migration: *[Migration](../interfaces/_migration_.migration.md)*): `object`

*Defined in [utils/knexUtils.ts:110](https://github.com/jmeyers91/ts-app/blob/a37a505/src/utils/knexUtils.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| migration | [Migration](../interfaces/_migration_.migration.md) |

**Returns:** `object`

___
<a id="getmigrationname"></a>

###  getMigrationName

▸ **getMigrationName**(migration: *[Migration](../interfaces/_migration_.migration.md)*): `string`

*Defined in [utils/knexUtils.ts:106](https://github.com/jmeyers91/ts-app/blob/a37a505/src/utils/knexUtils.ts#L106)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| migration | [Migration](../interfaces/_migration_.migration.md) |

**Returns:** `string`

___
<a id="getmigrations"></a>

###  getMigrations

▸ **getMigrations**(): `Promise`<[Migration](../interfaces/_migration_.migration.md)[]>

*Defined in [utils/knexUtils.ts:102](https://github.com/jmeyers91/ts-app/blob/a37a505/src/utils/knexUtils.ts#L102)*

**Returns:** `Promise`<[Migration](../interfaces/_migration_.migration.md)[]>

___

