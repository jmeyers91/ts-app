[learn-jenkins](../README.md) > ["models/User.model"](../modules/_models_user_model_.md) > [User](../classes/_models_user_model_.user.md)

# Class: User

## Hierarchy

 `Model`

**↳ User**

## Index

### Properties

* [createdAt](_models_user_model_.user.md#createdat)
* [email](_models_user_model_.user.md#email)
* [id](_models_user_model_.user.md#id)
* [password](_models_user_model_.user.md#password)
* [updatedAt](_models_user_model_.user.md#updatedat)
* [BelongsToOneRelation](_models_user_model_.user.md#belongstoonerelation)
* [HasManyRelation](_models_user_model_.user.md#hasmanyrelation)
* [HasOneRelation](_models_user_model_.user.md#hasonerelation)
* [HasOneThroughRelation](_models_user_model_.user.md#hasonethroughrelation)
* [JoinEagerAlgorithm](_models_user_model_.user.md#joineageralgorithm)
* [ManyToManyRelation](_models_user_model_.user.md#manytomanyrelation)
* [NaiveEagerAlgorithm](_models_user_model_.user.md#naiveeageralgorithm)
* [QueryBuilder](_models_user_model_.user.md#querybuilder)
* [WhereInEagerAlgorithm](_models_user_model_.user.md#whereineageralgorithm)
* [columnNameMappers](_models_user_model_.user.md#columnnamemappers)
* [dbRefProp](_models_user_model_.user.md#dbrefprop)
* [defaultEagerAlgorithm](_models_user_model_.user.md#defaulteageralgorithm)
* [defaultEagerOptions](_models_user_model_.user.md#defaulteageroptions)
* [fn](_models_user_model_.user.md#fn)
* [idColumn](_models_user_model_.user.md#idcolumn)
* [jsonAttributes](_models_user_model_.user.md#jsonattributes)
* [modelPaths](_models_user_model_.user.md#modelpaths)
* [modifiers](_models_user_model_.user.md#modifiers)
* [pickJsonSchemaProperties](_models_user_model_.user.md#pickjsonschemaproperties)
* [propRefRegex](_models_user_model_.user.md#proprefregex)
* [raw](_models_user_model_.user.md#raw)
* [relatedFindQueryMutates](_models_user_model_.user.md#relatedfindquerymutates)
* [relatedInsertQueryMutates](_models_user_model_.user.md#relatedinsertquerymutates)
* [relationMappings](_models_user_model_.user.md#relationmappings)
* [tableName](_models_user_model_.user.md#tablename)
* [uidProp](_models_user_model_.user.md#uidprop)
* [uidRefProp](_models_user_model_.user.md#uidrefprop)
* [virtualAttributes](_models_user_model_.user.md#virtualattributes)

### Methods

* [$afterDelete](_models_user_model_.user.md#_afterdelete)
* [$afterGet](_models_user_model_.user.md#_afterget)
* [$afterInsert](_models_user_model_.user.md#_afterinsert)
* [$afterUpdate](_models_user_model_.user.md#_afterupdate)
* [$afterValidate](_models_user_model_.user.md#_aftervalidate)
* [$appendRelated](_models_user_model_.user.md#_appendrelated)
* [$beforeDelete](_models_user_model_.user.md#_beforedelete)
* [$beforeInsert](_models_user_model_.user.md#_beforeinsert)
* [$beforeUpdate](_models_user_model_.user.md#_beforeupdate)
* [$beforeValidate](_models_user_model_.user.md#_beforevalidate)
* [$clone](_models_user_model_.user.md#_clone)
* [$formatDatabaseJson](_models_user_model_.user.md#_formatdatabasejson)
* [$formatJson](_models_user_model_.user.md#_formatjson)
* [$id](_models_user_model_.user.md#_id)
* [$knex](_models_user_model_.user.md#_knex)
* [$loadRelated](_models_user_model_.user.md#_loadrelated)
* [$omit](_models_user_model_.user.md#_omit)
* [$parseDatabaseJson](_models_user_model_.user.md#_parsedatabasejson)
* [$parseJson](_models_user_model_.user.md#_parsejson)
* [$pick](_models_user_model_.user.md#_pick)
* [$query](_models_user_model_.user.md#_query)
* [$relatedQuery](_models_user_model_.user.md#_relatedquery)
* [$set](_models_user_model_.user.md#_set)
* [$setDatabaseJson](_models_user_model_.user.md#_setdatabasejson)
* [$setJson](_models_user_model_.user.md#_setjson)
* [$setRelated](_models_user_model_.user.md#_setrelated)
* [$toDatabaseJson](_models_user_model_.user.md#_todatabasejson)
* [$toJson](_models_user_model_.user.md#_tojson)
* [$transaction](_models_user_model_.user.md#_transaction)
* [$traverse](_models_user_model_.user.md#_traverse)
* [$validate](_models_user_model_.user.md#_validate)
* [toJSON](_models_user_model_.user.md#tojson)
* [bindKnex](_models_user_model_.user.md#bindknex)
* [bindTransaction](_models_user_model_.user.md#bindtransaction)
* [createNotFoundError](_models_user_model_.user.md#createnotfounderror)
* [createValidationError](_models_user_model_.user.md#createvalidationerror)
* [createValidator](_models_user_model_.user.md#createvalidator)
* [fetchTableMetadata](_models_user_model_.user.md#fetchtablemetadata)
* [fromDatabaseJson](_models_user_model_.user.md#fromdatabasejson)
* [fromJson](_models_user_model_.user.md#fromjson)
* [getRelations](_models_user_model_.user.md#getrelations)
* [knex](_models_user_model_.user.md#knex)
* [knexQuery](_models_user_model_.user.md#knexquery)
* [loadRelated](_models_user_model_.user.md#loadrelated)
* [omitImpl](_models_user_model_.user.md#omitimpl)
* [query](_models_user_model_.user.md#query)
* [relatedQuery](_models_user_model_.user.md#relatedquery)
* [tableMetadata](_models_user_model_.user.md#tablemetadata)
* [traverse](_models_user_model_.user.md#traverse)

### Object literals

* [jsonSchema](_models_user_model_.user.md#jsonschema)

---

## Properties

<a id="createdat"></a>

###  createdAt

**● createdAt**: *`string`*

*Defined in [models/User.model.ts:21](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L21)*

___
<a id="email"></a>

###  email

**● email**: *`string`*

*Defined in [models/User.model.ts:19](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L19)*

___
<a id="id"></a>

###  id

**● id**: *`number`*

*Defined in [models/User.model.ts:18](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L18)*

___
<a id="password"></a>

###  password

**● password**: *`string`*

*Defined in [models/User.model.ts:20](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L20)*

___
<a id="updatedat"></a>

###  updatedAt

**● updatedAt**: *`string`*

*Defined in [models/User.model.ts:22](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L22)*

___
<a id="belongstoonerelation"></a>

### `<Static>` BelongsToOneRelation

**● BelongsToOneRelation**: *`Relation`*

*Inherited from Model.BelongsToOneRelation*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:508*

___
<a id="hasmanyrelation"></a>

### `<Static>` HasManyRelation

**● HasManyRelation**: *`Relation`*

*Inherited from Model.HasManyRelation*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:510*

___
<a id="hasonerelation"></a>

### `<Static>` HasOneRelation

**● HasOneRelation**: *`Relation`*

*Inherited from Model.HasOneRelation*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:509*

___
<a id="hasonethroughrelation"></a>

### `<Static>` HasOneThroughRelation

**● HasOneThroughRelation**: *`Relation`*

*Inherited from Model.HasOneThroughRelation*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:512*

___
<a id="joineageralgorithm"></a>

### `<Static>` JoinEagerAlgorithm

**● JoinEagerAlgorithm**: *`EagerAlgorithm`*

*Inherited from Model.JoinEagerAlgorithm*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:514*

___
<a id="manytomanyrelation"></a>

### `<Static>` ManyToManyRelation

**● ManyToManyRelation**: *`Relation`*

*Inherited from Model.ManyToManyRelation*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:511*

___
<a id="naiveeageralgorithm"></a>

### `<Static>` NaiveEagerAlgorithm

**● NaiveEagerAlgorithm**: *`EagerAlgorithm`*

*Inherited from Model.NaiveEagerAlgorithm*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:516*

___
<a id="querybuilder"></a>

### `<Static>` QueryBuilder

**● QueryBuilder**: *`QueryBuilder`*

*Inherited from Model.QueryBuilder*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:499*

___
<a id="whereineageralgorithm"></a>

### `<Static>` WhereInEagerAlgorithm

**● WhereInEagerAlgorithm**: *`EagerAlgorithm`*

*Inherited from Model.WhereInEagerAlgorithm*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:515*

___
<a id="columnnamemappers"></a>

### `<Static>` columnNameMappers

**● columnNameMappers**: *`ColumnNameMappers`*

*Inherited from Model.columnNameMappers*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:500*

___
<a id="dbrefprop"></a>

### `<Static>` dbRefProp

**● dbRefProp**: *`string`*

*Inherited from Model.dbRefProp*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:494*

___
<a id="defaulteageralgorithm"></a>

### `<Static>``<Optional>` defaultEagerAlgorithm

**● defaultEagerAlgorithm**: *`EagerAlgorithm`*

*Inherited from Model.defaultEagerAlgorithm*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:497*

___
<a id="defaulteageroptions"></a>

### `<Static>``<Optional>` defaultEagerOptions

**● defaultEagerOptions**: *`EagerOptions`*

*Inherited from Model.defaultEagerOptions*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:498*

___
<a id="fn"></a>

### `<Static>` fn

**● fn**: *`knex.FunctionHelper`*

*Inherited from Model.fn*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:506*

___
<a id="idcolumn"></a>

### `<Static>` idColumn

**● idColumn**: *`string` \| `string`[]*

*Inherited from Model.idColumn*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:487*

___
<a id="jsonattributes"></a>

### `<Static>` jsonAttributes

**● jsonAttributes**: *`string`[]*

*Inherited from Model.jsonAttributes*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:490*

___
<a id="modelpaths"></a>

### `<Static>` modelPaths

**● modelPaths**: *`string`[]*

*Inherited from Model.modelPaths*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:488*

___
<a id="modifiers"></a>

### `<Static>` modifiers

**● modifiers**: *`Modifiers`*

*Inherited from Model.modifiers*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:503*

___
<a id="pickjsonschemaproperties"></a>

### `<Static>` pickJsonSchemaProperties

**● pickJsonSchemaProperties**: *`boolean`*

*Inherited from Model.pickJsonSchemaProperties*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:496*

___
<a id="proprefregex"></a>

### `<Static>` propRefRegex

**● propRefRegex**: *`RegExp`*

*Inherited from Model.propRefRegex*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:495*

___
<a id="raw"></a>

### `<Static>` raw

**● raw**: *`knex.RawBuilder`*

*Inherited from Model.raw*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:505*

___
<a id="relatedfindquerymutates"></a>

### `<Static>` relatedFindQueryMutates

**● relatedFindQueryMutates**: *`boolean`*

*Inherited from Model.relatedFindQueryMutates*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:501*

___
<a id="relatedinsertquerymutates"></a>

### `<Static>` relatedInsertQueryMutates

**● relatedInsertQueryMutates**: *`boolean`*

*Inherited from Model.relatedInsertQueryMutates*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:502*

___
<a id="relationmappings"></a>

### `<Static>` relationMappings

**● relationMappings**: *`object`*

*Overrides Model.relationMappings*

*Defined in [models/User.model.ts:16](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L16)*

#### Type declaration

___
<a id="tablename"></a>

### `<Static>` tableName

**● tableName**: *`string`* = "app_user"

*Overrides Model.tableName*

*Defined in [models/User.model.ts:4](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L4)*

___
<a id="uidprop"></a>

### `<Static>` uidProp

**● uidProp**: *`string`*

*Inherited from Model.uidProp*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:492*

___
<a id="uidrefprop"></a>

### `<Static>` uidRefProp

**● uidRefProp**: *`string`*

*Inherited from Model.uidRefProp*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:493*

___
<a id="virtualattributes"></a>

### `<Static>` virtualAttributes

**● virtualAttributes**: *`string`[]*

*Inherited from Model.virtualAttributes*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:491*

___

## Methods

<a id="_afterdelete"></a>

###  $afterDelete

▸ **$afterDelete**(queryContext: *`QueryContext`*): `Promise`<`any`> \| `void`

*Inherited from Model.$afterDelete*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:648*

**Parameters:**

| Name | Type |
| ------ | ------ |
| queryContext | `QueryContext` |

**Returns:** `Promise`<`any`> \| `void`

___
<a id="_afterget"></a>

###  $afterGet

▸ **$afterGet**(queryContext: *`QueryContext`*): `Promise`<`any`> \| `void`

*Inherited from Model.$afterGet*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:646*

**Parameters:**

| Name | Type |
| ------ | ------ |
| queryContext | `QueryContext` |

**Returns:** `Promise`<`any`> \| `void`

___
<a id="_afterinsert"></a>

###  $afterInsert

▸ **$afterInsert**(queryContext: *`QueryContext`*): `Promise`<`any`> \| `void`

*Inherited from Model.$afterInsert*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:643*

**Parameters:**

| Name | Type |
| ------ | ------ |
| queryContext | `QueryContext` |

**Returns:** `Promise`<`any`> \| `void`

___
<a id="_afterupdate"></a>

###  $afterUpdate

▸ **$afterUpdate**(opt: *`ModelOptions`*, queryContext: *`QueryContext`*): `Promise`<`any`> \| `void`

*Inherited from Model.$afterUpdate*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:644*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opt | `ModelOptions` |
| queryContext | `QueryContext` |

**Returns:** `Promise`<`any`> \| `void`

___
<a id="_aftervalidate"></a>

###  $afterValidate

▸ **$afterValidate**(json: *`Pojo`*, opt: *`ModelOptions`*): `void`

*Inherited from Model.$afterValidate*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:577*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `Pojo` |
| opt | `ModelOptions` |

**Returns:** `void`

___
<a id="_appendrelated"></a>

###  $appendRelated

▸ **$appendRelated**<`T`,`RelatedM`>(this: *`T`*, relation: *`String` \| `Relation`*, related: *`RelatedM` \| `RelatedM`[] \| `null` \| `undefined`*): `T`

*Inherited from Model.$appendRelated*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:593*

**Type parameters:**

#### T 
#### RelatedM :  `Model`
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `T` |
| relation | `String` \| `Relation` |
| related | `RelatedM` \| `RelatedM`[] \| `null` \| `undefined` |

**Returns:** `T`

___
<a id="_beforedelete"></a>

###  $beforeDelete

▸ **$beforeDelete**(queryContext: *`QueryContext`*): `Promise`<`any`> \| `void`

*Inherited from Model.$beforeDelete*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:647*

**Parameters:**

| Name | Type |
| ------ | ------ |
| queryContext | `QueryContext` |

**Returns:** `Promise`<`any`> \| `void`

___
<a id="_beforeinsert"></a>

###  $beforeInsert

▸ **$beforeInsert**(queryContext: *`QueryContext`*): `Promise`<`any`> \| `void`

*Inherited from Model.$beforeInsert*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:642*

**Parameters:**

| Name | Type |
| ------ | ------ |
| queryContext | `QueryContext` |

**Returns:** `Promise`<`any`> \| `void`

___
<a id="_beforeupdate"></a>

###  $beforeUpdate

▸ **$beforeUpdate**(opt: *`ModelOptions`*, queryContext: *`QueryContext`*): `Promise`<`any`> \| `void`

*Inherited from Model.$beforeUpdate*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:645*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opt | `ModelOptions` |
| queryContext | `QueryContext` |

**Returns:** `Promise`<`any`> \| `void`

___
<a id="_beforevalidate"></a>

###  $beforeValidate

▸ **$beforeValidate**(jsonSchema: *`JsonSchema`*, json: *`Pojo`*, opt: *`ModelOptions`*): `JsonSchema`

*Inherited from Model.$beforeValidate*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:575*

**Parameters:**

| Name | Type |
| ------ | ------ |
| jsonSchema | `JsonSchema` |
| json | `Pojo` |
| opt | `ModelOptions` |

**Returns:** `JsonSchema`

___
<a id="_clone"></a>

###  $clone

▸ **$clone**<`T`>(this: *`T`*, opt?: *`CloneOptions`*): `T`

*Inherited from Model.$clone*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:602*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `T` |
| `Optional` opt | `CloneOptions` |

**Returns:** `T`

___
<a id="_formatdatabasejson"></a>

###  $formatDatabaseJson

▸ **$formatDatabaseJson**(json: *`Pojo`*): `Pojo`

*Inherited from Model.$formatDatabaseJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:583*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `Pojo` |

**Returns:** `Pojo`

___
<a id="_formatjson"></a>

###  $formatJson

▸ **$formatJson**(json: *`Pojo`*): `Pojo`

*Inherited from Model.$formatJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:585*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `Pojo` |

**Returns:** `Pojo`

___
<a id="_id"></a>

###  $id

▸ **$id**(): `any`

▸ **$id**(id: *`any`*): `void`

*Inherited from Model.$id*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:572*

**Returns:** `any`

*Inherited from Model.$id*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:573*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `any` |

**Returns:** `void`

___
<a id="_knex"></a>

###  $knex

▸ **$knex**(): [knex](_models_user_model_.user.md#knex)

*Inherited from Model.$knex*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:639*

**Returns:** [knex](_models_user_model_.user.md#knex)

___
<a id="_loadrelated"></a>

###  $loadRelated

▸ **$loadRelated**<`QM`>(this: *`QM`*, expression: *`keyof this` \| `RelationExpression`*, filters?: *`Filters`<`QM`>*, trxOrKnex?: *`Transaction` \| [knex](_models_user_model_.user.md#knex)*): `QueryBuilder`<`QM`, `QM`>

*Inherited from Model.$loadRelated*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:629*

**Type parameters:**

#### QM :  `Model`
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `QM` |
| expression | `keyof this` \| `RelationExpression` |
| `Optional` filters | `Filters`<`QM`> |
| `Optional` trxOrKnex | `Transaction` \| [knex](_models_user_model_.user.md#knex) |

**Returns:** `QueryBuilder`<`QM`, `QM`>

___
<a id="_omit"></a>

###  $omit

▸ **$omit**<`T`>(this: *`T`*, keys: *`string` \| `string`[] \| `Properties`*): `T`

*Inherited from Model.$omit*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:600*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `T` |
| keys | `string` \| `string`[] \| `Properties` |

**Returns:** `T`

___
<a id="_parsedatabasejson"></a>

###  $parseDatabaseJson

▸ **$parseDatabaseJson**(json: *`Pojo`*): `Pojo`

*Inherited from Model.$parseDatabaseJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:582*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `Pojo` |

**Returns:** `Pojo`

___
<a id="_parsejson"></a>

###  $parseJson

▸ **$parseJson**(json: *`Pojo`*, opt?: *`ModelOptions`*): `Pojo`

*Inherited from Model.$parseJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:584*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `Pojo` |
| `Optional` opt | `ModelOptions` |

**Returns:** `Pojo`

___
<a id="_pick"></a>

###  $pick

▸ **$pick**<`T`>(this: *`T`*, keys: *`string` \| `string`[] \| `Properties`*): `T`

*Inherited from Model.$pick*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:601*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `T` |
| keys | `string` \| `string`[] \| `Properties` |

**Returns:** `T`

___
<a id="_query"></a>

###  $query

▸ **$query**<`QM`>(this: *`QM`*, trxOrKnex?: *`Transaction` \| [knex](_models_user_model_.user.md#knex)*): `QueryBuilder`<`QM`, `QM`>

*Inherited from Model.$query*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:604*

**Type parameters:**

#### QM :  `Model`
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `QM` |
| `Optional` trxOrKnex | `Transaction` \| [knex](_models_user_model_.user.md#knex) |

**Returns:** `QueryBuilder`<`QM`, `QM`>

___
<a id="_relatedquery"></a>

###  $relatedQuery

▸ **$relatedQuery**<`K`,`V`>(relationName: *`K`*, trxOrKnex?: *`Transaction` \| [knex](_models_user_model_.user.md#knex)*): `QueryBuilder`<`V`, `V`, `V`>

▸ **$relatedQuery**<`QM`,`RM`>(relationName: *`keyof this` \| `string`*, trxOrKnex?: *`Transaction` \| [knex](_models_user_model_.user.md#knex)*): `QueryBuilder`<`QM`, `RM`>

*Inherited from Model.$relatedQuery*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:614*

If you add fields to your model, you get $relatedQuery typings for free.

Note that if you make any chained calls to the QueryBuilder, though, you should apply a cast, which will make your code use not this signatue, but the following signature.

**Type parameters:**

#### K :  `keyof this`
#### V :  `this[K]` & `Model`
**Parameters:**

| Name | Type |
| ------ | ------ |
| relationName | `K` |
| `Optional` trxOrKnex | `Transaction` \| [knex](_models_user_model_.user.md#knex) |

**Returns:** `QueryBuilder`<`V`, `V`, `V`>

*Inherited from Model.$relatedQuery*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:624*

Builds a query that only affects the models related to this instance through a relation. Note that this signature requires a type cast (like `bob.$relatedQuery<Animal>('pets')`).

**Type parameters:**

#### QM :  `Model`
#### RM 
**Parameters:**

| Name | Type |
| ------ | ------ |
| relationName | `keyof this` \| `string` |
| `Optional` trxOrKnex | `Transaction` \| [knex](_models_user_model_.user.md#knex) |

**Returns:** `QueryBuilder`<`QM`, `RM`>

___
<a id="_set"></a>

###  $set

▸ **$set**<`T`>(this: *`T`*, obj: *`Pojo`*): `T`

*Inherited from Model.$set*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:599*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `T` |
| obj | `Pojo` |

**Returns:** `T`

___
<a id="_setdatabasejson"></a>

###  $setDatabaseJson

▸ **$setDatabaseJson**<`M`>(this: *`M`*, json: *`Pojo`*): `M`

*Inherited from Model.$setDatabaseJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:587*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `M` |
| json | `Pojo` |

**Returns:** `M`

___
<a id="_setjson"></a>

###  $setJson

▸ **$setJson**<`T`>(this: *`T`*, json: *`Pojo`*, opt?: *`ModelOptions`*): `T`

*Inherited from Model.$setJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:586*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `T` |
| json | `Pojo` |
| `Optional` opt | `ModelOptions` |

**Returns:** `T`

___
<a id="_setrelated"></a>

###  $setRelated

▸ **$setRelated**<`T`,`RelatedM`>(this: *`T`*, relation: *`String` \| `Relation`*, related: *`RelatedM` \| `RelatedM`[] \| `null` \| `undefined`*): `T`

*Inherited from Model.$setRelated*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:588*

**Type parameters:**

#### T 
#### RelatedM :  `Model`
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `T` |
| relation | `String` \| `Relation` |
| related | `RelatedM` \| `RelatedM`[] \| `null` \| `undefined` |

**Returns:** `T`

___
<a id="_todatabasejson"></a>

###  $toDatabaseJson

▸ **$toDatabaseJson**(): `object`

*Inherited from Model.$toDatabaseJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:579*

**Returns:** `object`

___
<a id="_tojson"></a>

###  $toJson

▸ **$toJson**(opt?: *`ToJsonOptions`*): `object`

*Inherited from Model.$toJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:580*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opt | `ToJsonOptions` |

**Returns:** `object`

___
<a id="_transaction"></a>

###  $transaction

▸ **$transaction**(): [knex](_models_user_model_.user.md#knex)

*Inherited from Model.$transaction*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:640*

**Returns:** [knex](_models_user_model_.user.md#knex)

___
<a id="_traverse"></a>

###  $traverse

▸ **$traverse**(traverser: *`TraverserFunction`*): `void`

▸ **$traverse**(filterConstructor: *`this`*, traverser: *`TraverserFunction`*): `void`

*Inherited from Model.$traverse*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:636*

**Parameters:**

| Name | Type |
| ------ | ------ |
| traverser | `TraverserFunction` |

**Returns:** `void`

*Inherited from Model.$traverse*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:637*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filterConstructor | `this` |
| traverser | `TraverserFunction` |

**Returns:** `void`

___
<a id="_validate"></a>

###  $validate

▸ **$validate**(json: *`Pojo`*, opt: *`ModelOptions`*): `Pojo`

*Inherited from Model.$validate*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:576*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `Pojo` |
| opt | `ModelOptions` |

**Returns:** `Pojo`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(opt?: *`ToJsonOptions`*): `object`

*Inherited from Model.toJSON*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:581*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opt | `ToJsonOptions` |

**Returns:** `object`

___
<a id="bindknex"></a>

### `<Static>` bindKnex

▸ **bindKnex**<`M`>(this: *`M`*, knex: *[knex]()*): `M`

*Inherited from Model.bindKnex*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:528*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `M` |
| knex | [knex]() |

**Returns:** `M`

___
<a id="bindtransaction"></a>

### `<Static>` bindTransaction

▸ **bindTransaction**<`M`>(this: *`M`*, transaction: *`Transaction`*): `M`

*Inherited from Model.bindTransaction*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:529*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `M` |
| transaction | `Transaction` |

**Returns:** `M`

___
<a id="createnotfounderror"></a>

### `<Static>` createNotFoundError

▸ **createNotFoundError**(): `Error`

*Inherited from Model.createNotFoundError*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:532*

**Returns:** `Error`

___
<a id="createvalidationerror"></a>

### `<Static>` createValidationError

▸ **createValidationError**(args: *`CreateValidationErrorArgs`*): `Error`

*Inherited from Model.createValidationError*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:531*

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | `CreateValidationErrorArgs` |

**Returns:** `Error`

___
<a id="createvalidator"></a>

### `<Static>` createValidator

▸ **createValidator**(): `Validator`

*Inherited from Model.createValidator*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:530*

**Returns:** `Validator`

___
<a id="fetchtablemetadata"></a>

### `<Static>` fetchTableMetadata

▸ **fetchTableMetadata**(opt?: *`FetchTableMetadataOptions`*): `Promise`<`TableMetadata`>

*Inherited from Model.fetchTableMetadata*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:565*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opt | `FetchTableMetadataOptions` |

**Returns:** `Promise`<`TableMetadata`>

___
<a id="fromdatabasejson"></a>

### `<Static>` fromDatabaseJson

▸ **fromDatabaseJson**<`M`>(this: *`Constructor`<`M`>*, row: *`Pojo`*): `M`

*Inherited from Model.fromDatabaseJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:536*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `Constructor`<`M`> |
| row | `Pojo` |

**Returns:** `M`

___
<a id="fromjson"></a>

### `<Static>` fromJson

▸ **fromJson**<`M`>(this: *`Constructor`<`M`>*, json: *`Pojo`*, opt?: *`ModelOptions`*): `M`

*Inherited from Model.fromJson*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:535*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `Constructor`<`M`> |
| json | `Pojo` |
| `Optional` opt | `ModelOptions` |

**Returns:** `M`

___
<a id="getrelations"></a>

### `<Static>` getRelations

▸ **getRelations**(): `object`

*Inherited from Model.getRelations*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:518*

**Returns:** `object`

___
<a id="knex"></a>

### `<Static>` knex

▸ **knex**(knex?: *[knex]()*): [knex]()

*Inherited from Model.knex*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:526*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` knex | [knex]() |

**Returns:** [knex]()

___
<a id="knexquery"></a>

### `<Static>` knexQuery

▸ **knexQuery**(): `knex.QueryBuilder`

*Inherited from Model.knexQuery*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:527*

**Returns:** `knex.QueryBuilder`

___
<a id="loadrelated"></a>

### `<Static>` loadRelated

▸ **loadRelated**<`QM`>(this: *`Constructor`<`QM`>*, models: *`QM`[]*, expression: *`RelationExpression`*, filters?: *`Filters`<`QM`>*, trxOrKnex?: *`Transaction` \| [knex](_models_user_model_.user.md#knex)*): `QueryBuilder`<`QM`>

▸ **loadRelated**<`QM`>(this: *`Constructor`<`QM`>*, model: *`QM`*, expression: *`RelationExpression`*, filters?: *`Filters`<`QM`>*, trxOrKnex?: *`Transaction` \| [knex](_models_user_model_.user.md#knex)*): `QueryBuilderYieldingOne`<`QM`>

*Inherited from Model.loadRelated*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:541*

**Type parameters:**

#### QM :  `Model`
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `Constructor`<`QM`> |
| models | `QM`[] |
| expression | `RelationExpression` |
| `Optional` filters | `Filters`<`QM`> |
| `Optional` trxOrKnex | `Transaction` \| [knex](_models_user_model_.user.md#knex) |

**Returns:** `QueryBuilder`<`QM`>

*Inherited from Model.loadRelated*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:549*

**Type parameters:**

#### QM :  `Model`
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `Constructor`<`QM`> |
| model | `QM` |
| expression | `RelationExpression` |
| `Optional` filters | `Filters`<`QM`> |
| `Optional` trxOrKnex | `Transaction` \| [knex](_models_user_model_.user.md#knex) |

**Returns:** `QueryBuilderYieldingOne`<`QM`>

___
<a id="omitimpl"></a>

### `<Static>` omitImpl

▸ **omitImpl**(f: *`function`*): `void`

*Inherited from Model.omitImpl*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:538*

**Parameters:**

| Name | Type |
| ------ | ------ |
| f | `function` |

**Returns:** `void`

___
<a id="query"></a>

### `<Static>` query

▸ **query**<`QM`>(this: *`Constructor`<`QM`>*, trxOrKnex?: *`Transaction` \| [knex](_models_user_model_.user.md#knex)*): `QueryBuilder`<`QM`>

*Inherited from Model.query*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:520*

**Type parameters:**

#### QM :  `Model`
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `Constructor`<`QM`> |
| `Optional` trxOrKnex | `Transaction` \| [knex](_models_user_model_.user.md#knex) |

**Returns:** `QueryBuilder`<`QM`>

___
<a id="relatedquery"></a>

### `<Static>` relatedQuery

▸ **relatedQuery**(relationName: *`string`*): `QueryBuilder`<`any`, `any`[]>

*Inherited from Model.relatedQuery*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:525*

**Parameters:**

| Name | Type |
| ------ | ------ |
| relationName | `string` |

**Returns:** `QueryBuilder`<`any`, `any`[]>

___
<a id="tablemetadata"></a>

### `<Static>` tableMetadata

▸ **tableMetadata**(opt?: *`TableMetadataOptions`*): `TableMetadata`

*Inherited from Model.tableMetadata*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:564*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opt | `TableMetadataOptions` |

**Returns:** `TableMetadata`

___
<a id="traverse"></a>

### `<Static>` traverse

▸ **traverse**(filterConstructor: *`Model`*, models: *`Model` \| `Model`[]*, traverser: *`TraverserFunction`*): `void`

▸ **traverse**(models: *`Model` \| `Model`[]*, traverser: *`TraverserFunction`*): `void`

*Inherited from Model.traverse*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:557*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filterConstructor | `Model` |
| models | `Model` \| `Model`[] |
| traverser | `TraverserFunction` |

**Returns:** `void`

*Inherited from Model.traverse*

*Defined in /Users/james/projects/ts-app/node_modules/objection/typings/objection/index.d.ts:562*

**Parameters:**

| Name | Type |
| ------ | ------ |
| models | `Model` \| `Model`[] |
| traverser | `TraverserFunction` |

**Returns:** `void`

___

## Object literals

<a id="jsonschema"></a>

### `<Static>` jsonSchema

**jsonSchema**: *`object`*

*Overrides Model.jsonSchema*

*Defined in [models/User.model.ts:6](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L6)*

<a id="jsonschema.required"></a>

####  required

**● required**: *`string`[]* =  ['email', 'password']

*Defined in [models/User.model.ts:8](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L8)*

___
<a id="jsonschema.type"></a>

####  type

**● type**: *`string`* = "object"

*Defined in [models/User.model.ts:7](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L7)*

___
<a id="jsonschema.properties"></a>

####  properties

**properties**: *`object`*

*Defined in [models/User.model.ts:9](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L9)*

<a id="jsonschema.properties.email-1"></a>

####  email

**email**: *`object`*

*Defined in [models/User.model.ts:11](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L11)*

<a id="jsonschema.properties.email-1.type-1"></a>

####  type

**● type**: *`string`* = "string"

*Defined in [models/User.model.ts:11](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L11)*

___

___
<a id="jsonschema.properties.id-1"></a>

####  id

**id**: *`object`*

*Defined in [models/User.model.ts:10](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L10)*

<a id="jsonschema.properties.id-1.type-2"></a>

####  type

**● type**: *`string`* = "integer"

*Defined in [models/User.model.ts:10](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L10)*

___

___
<a id="jsonschema.properties.password-1"></a>

####  password

**password**: *`object`*

*Defined in [models/User.model.ts:12](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L12)*

<a id="jsonschema.properties.password-1.type-3"></a>

####  type

**● type**: *`string`* = "string"

*Defined in [models/User.model.ts:12](https://github.com/jmeyers91/ts-app/blob/2005cf1/src/models/User.model.ts#L12)*

___

___

___

___

