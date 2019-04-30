[ts-app](../README.md) > ["utils/knexUtils"](../modules/_utils_knexutils_.md)

# External module: "utils/knexUtils"

## Index

### Classes

* [MigrationSource](../classes/_utils_knexutils_.migrationsource.md)

### Type aliases

* [BuildTable](_utils_knexutils_.md#buildtable)
* [MigrateFunction](_utils_knexutils_.md#migratefunction)
* [MigratorConfigWithSource](_utils_knexutils_.md#migratorconfigwithsource)

### Functions

* [alterTable](_utils_knexutils_.md#altertable)
* [downTable](_utils_knexutils_.md#downtable)
* [migrateLatest](_utils_knexutils_.md#migratelatest)
* [migrateRollback](_utils_knexutils_.md#migraterollback)
* [upTable](_utils_knexutils_.md#uptable)

---

## Type aliases

<a id="buildtable"></a>

###  BuildTable

**Ƭ BuildTable**: *`function`*

*Defined in [utils/knexUtils.ts:91](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/utils/knexUtils.ts#L91)*

#### Type declaration
▸(builder: *`TableBuilder`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| builder | `TableBuilder` |

**Returns:** `any`

___
<a id="migratefunction"></a>

###  MigrateFunction

**Ƭ MigrateFunction**: *`function`*

*Defined in [utils/knexUtils.ts:90](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/utils/knexUtils.ts#L90)*

#### Type declaration
▸(knex: *`Knex`*): `Promise`<`void`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| knex | `Knex` |

**Returns:** `Promise`<`void`>

___
<a id="migratorconfigwithsource"></a>

###  MigratorConfigWithSource

**Ƭ MigratorConfigWithSource**: *`MigratorConfig` & `object`*

*Defined in [utils/knexUtils.ts:87](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/utils/knexUtils.ts#L87)*

___

## Functions

<a id="altertable"></a>

###  alterTable

▸ **alterTable**(tableName: *`string`*, buildTable: *[BuildTable](_utils_knexutils_.md#buildtable)*): [MigrateFunction](_utils_knexutils_.md#migratefunction)

*Defined in [utils/knexUtils.ts:76](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/utils/knexUtils.ts#L76)*

Creates an up migration function that creates `tableName` if it doesn't exist using the `buildTable` function to define columns and relations.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| tableName | `string` |  Name of the table to be created. |
| buildTable | [BuildTable](_utils_knexutils_.md#buildtable) |  Table builder function for adding columns. |

**Returns:** [MigrateFunction](_utils_knexutils_.md#migratefunction)

___
<a id="downtable"></a>

###  downTable

▸ **downTable**(tableName: *`string`*): [MigrateFunction](_utils_knexutils_.md#migratefunction)

*Defined in [utils/knexUtils.ts:45](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/utils/knexUtils.ts#L45)*

Creates a migration function that drops `tableName` if it exists.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| tableName | `string` |  Name of the table to drop. |

**Returns:** [MigrateFunction](_utils_knexutils_.md#migratefunction)
Knex migration down function.

___
<a id="migratelatest"></a>

###  migrateLatest

▸ **migrateLatest**(knex: *`Knex`*, migrations: *[Migration](../interfaces/_migration_.migration.md)[]*): `Promise`<`string`[]>

*Defined in [utils/knexUtils.ts:11](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/utils/knexUtils.ts#L11)*

Runs the passed knex migrations.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| knex | `Knex` |  The knex instance to use to run the migrations. |
| migrations | [Migration](../interfaces/_migration_.migration.md)[] |  The array of migrations to run. |

**Returns:** `Promise`<`string`[]>
A promise that resolves the knex migration result [migrationCount, migrationNames[]]

___
<a id="migraterollback"></a>

###  migrateRollback

▸ **migrateRollback**(knex: *`Knex`*, migrations: *[Migration](../interfaces/_migration_.migration.md)[]*): `Promise`<`void`>

*Defined in [utils/knexUtils.ts:29](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/utils/knexUtils.ts#L29)*

Rolls back the passed knex migrations.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| knex | `Knex` |  The knex instance to use to run the migrations. |
| migrations | [Migration](../interfaces/_migration_.migration.md)[] |  The array of migrations to run the rollback against. |

**Returns:** `Promise`<`void`>
Promise<void>

___
<a id="uptable"></a>

###  upTable

▸ **upTable**(tableName: *`string`*, buildTable: *[BuildTable](_utils_knexutils_.md#buildtable)*): [MigrateFunction](_utils_knexutils_.md#migratefunction)

*Defined in [utils/knexUtils.ts:58](https://github.com/jmeyers91/ts-app/blob/ae30f87/src/utils/knexUtils.ts#L58)*

Creates a migration function that creates `tableName` if it doesn't exist using the `buildTable` function to define columns and relations.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| tableName | `string` |  Name of the table to be created. |
| buildTable | [BuildTable](_utils_knexutils_.md#buildtable) |  Table builder function for adding columns. |

**Returns:** [MigrateFunction](_utils_knexutils_.md#migratefunction)

___

