[learn-jenkins](../README.md) > ["Router"](../modules/_router_.md) > [AppRouter](../classes/_router_.approuter.md) > [Layer](../classes/_router_.approuter.layer.md)

# Class: Layer

## Hierarchy

**Layer**

## Index

### Constructors

* [constructor](_router_.approuter.layer.md#constructor)

### Properties

* [methods](_router_.approuter.layer.md#methods)
* [name](_router_.approuter.layer.md#name)
* [opts](_router_.approuter.layer.md#opts)
* [paramNames](_router_.approuter.layer.md#paramnames)
* [path](_router_.approuter.layer.md#path)
* [regexp](_router_.approuter.layer.md#regexp)
* [stack](_router_.approuter.layer.md#stack)

### Methods

* [captures](_router_.approuter.layer.md#captures)
* [match](_router_.approuter.layer.md#match)
* [param](_router_.approuter.layer.md#param)
* [params](_router_.approuter.layer.md#params)
* [setPrefix](_router_.approuter.layer.md#setprefix)
* [url](_router_.approuter.layer.md#url)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Layer**(path: *`string` \| `RegExp`*, methods: *`string`[]*, middleware: *`Router.IMiddleware`*, opts?: *[ILayerOptions](../interfaces/_router_.approuter.ilayeroptions.md)*): [Layer](_router_.approuter.layer.md)

⊕ **new Layer**(path: *`string` \| `RegExp`*, methods: *`string`[]*, middleware: *`Array`<`Router.IMiddleware`>*, opts?: *[ILayerOptions](../interfaces/_router_.approuter.ilayeroptions.md)*): [Layer](_router_.approuter.layer.md)

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:125*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` |
| methods | `string`[] |
| middleware | `Router.IMiddleware` |
| `Optional` opts | [ILayerOptions](../interfaces/_router_.approuter.ilayeroptions.md) |

**Returns:** [Layer](_router_.approuter.layer.md)

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:127*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` |
| methods | `string`[] |
| middleware | `Array`<`Router.IMiddleware`> |
| `Optional` opts | [ILayerOptions](../interfaces/_router_.approuter.ilayeroptions.md) |

**Returns:** [Layer](_router_.approuter.layer.md)

___

## Properties

<a id="methods"></a>

###  methods

**● methods**: *`string`[]*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:121*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:120*

___
<a id="opts"></a>

###  opts

**● opts**: *`ILayerOptions`*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:119*

___
<a id="paramnames"></a>

###  paramNames

**● paramNames**: *`ParamName`[]*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:122*

___
<a id="path"></a>

###  path

**● path**: *`string`*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:125*

___
<a id="regexp"></a>

###  regexp

**● regexp**: *`RegExp`*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:124*

___
<a id="stack"></a>

###  stack

**● stack**: *`Router.IMiddleware`[]*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:123*

___

## Methods

<a id="captures"></a>

###  captures

▸ **captures**(path: *`string`*): `string`[]

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:143*

Returns array of regexp url path captures.

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `string`[]

___
<a id="match"></a>

###  match

▸ **match**(path: *`string`*): `boolean`

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:133*

Returns whether request `path` matches route.

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `boolean`

___
<a id="param"></a>

###  param

▸ **param**(param: *`string`*, fn: *`Router.IMiddleware`*): `Layer`

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:153*

Run validations on route named parameters.

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `string` |
| fn | `Router.IMiddleware` |

**Returns:** `Layer`

___
<a id="params"></a>

###  params

▸ **params**(path: *`string` \| `RegExp`*, captures: *`string`[]*, existingParams?: *`Object`*): `Object`

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:138*

Returns map of URL parameters for given `path` and `paramNames`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` |
| captures | `string`[] |
| `Optional` existingParams | `Object` |

**Returns:** `Object`

___
<a id="setprefix"></a>

###  setPrefix

▸ **setPrefix**(prefix: *`string`*): `Layer`

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:158*

Prefix route path.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `string` |

**Returns:** `Layer`

___
<a id="url"></a>

###  url

▸ **url**(params: *`Object`*): `string`

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:148*

Generate URL for route using given `params`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | `Object` |

**Returns:** `string`

___

