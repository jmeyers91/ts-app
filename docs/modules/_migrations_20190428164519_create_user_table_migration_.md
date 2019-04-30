[learn-jenkins](../README.md) > ["migrations/20190428164519_create_user_table.migration"](../modules/_migrations_20190428164519_create_user_table_migration_.md)

# External module: "migrations/20190428164519_create_user_table.migration"

## Index

### Object literals

* [migration](_migrations_20190428164519_create_user_table_migration_.md#migration)

---

## Object literals

<a id="migration"></a>

### `<Const>` migration

**migration**: *`object`*

*Defined in [migrations/20190428164519_create_user_table.migration.ts:4](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/migrations/20190428164519_create_user_table.migration.ts#L4)*

<a id="migration.down"></a>

####  down

**● down**: *`function`* =  downTable('app_user')

*Defined in [migrations/20190428164519_create_user_table.migration.ts:15](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/migrations/20190428164519_create_user_table.migration.ts#L15)*

#### Type declaration
▸(knex: *`Knex`*): `Promise`<`void`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| knex | `Knex` |

**Returns:** `Promise`<`void`>

___
<a id="migration.name"></a>

####  name

**● name**: *`string`* = "20190428164519_create_user_table"

*Defined in [migrations/20190428164519_create_user_table.migration.ts:5](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/migrations/20190428164519_create_user_table.migration.ts#L5)*

___
<a id="migration.up"></a>

####  up

**● up**: *`function`* =  upTable('app_user', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
    table
      .string('email')
      .unique()
      .notNullable();
    table.string('password').notNullable();
  })

*Defined in [migrations/20190428164519_create_user_table.migration.ts:6](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/migrations/20190428164519_create_user_table.migration.ts#L6)*

#### Type declaration
▸(knex: *`Knex`*): `Promise`<`void`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| knex | `Knex` |

**Returns:** `Promise`<`void`>

___

___

