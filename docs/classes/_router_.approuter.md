[ts-app](../README.md) > ["Router"](../modules/_router_.md) > [AppRouter](../classes/_router_.approuter.md)

# Class: AppRouter

## Hierarchy

 `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

**↳ AppRouter**

## Index

### Classes

* [Layer](_router_.approuter.layer.md)
* [ParamName](_router_.approuter.paramname.md)

### Interfaces

* [ILayerOptions](../interfaces/_router_.approuter.ilayeroptions.md)
* [IParamMiddleware](../interfaces/_router_.approuter.iparammiddleware.md)
* [IRouterAllowedMethodsOptions](../interfaces/_router_.approuter.irouterallowedmethodsoptions.md)
* [IRouterContext](../interfaces/_router_.approuter.iroutercontext.md)
* [IRouterOptions](../interfaces/_router_.approuter.irouteroptions.md)
* [IRouterParamContext](../interfaces/_router_.approuter.irouterparamcontext.md)
* [IRoutesMatch](../interfaces/_router_.approuter.iroutesmatch.md)
* [IUrlOptionsQuery](../interfaces/_router_.approuter.iurloptionsquery.md)

### Type aliases

* [IMiddleware](_router_.approuter.md#imiddleware)
* [RouterContext](_router_.approuter.md#routercontext)

### Constructors

* [constructor](_router_.approuter.md#constructor)

### Properties

* [params](_router_.approuter.md#params)
* [stack](_router_.approuter.md#stack)

### Methods

* [all](_router_.approuter.md#all)
* [allowedMethods](_router_.approuter.md#allowedmethods)
* [del](_router_.approuter.md#del)
* [delete](_router_.approuter.md#delete)
* [get](_router_.approuter.md#get)
* [head](_router_.approuter.md#head)
* [link](_router_.approuter.md#link)
* [match](_router_.approuter.md#match)
* [middleware](_router_.approuter.md#middleware)
* [options](_router_.approuter.md#options)
* [param](_router_.approuter.md#param)
* [patch](_router_.approuter.md#patch)
* [post](_router_.approuter.md#post)
* [prefix](_router_.approuter.md#prefix)
* [put](_router_.approuter.md#put)
* [redirect](_router_.approuter.md#redirect)
* [register](_router_.approuter.md#register)
* [route](_router_.approuter.md#route)
* [routes](_router_.approuter.md#routes)
* [unlink](_router_.approuter.md#unlink)
* [url](_router_.approuter.md#url)
* [use](_router_.approuter.md#use)
* [url](_router_.approuter.md#url-1)

---

## Type aliases

<a id="imiddleware"></a>

### `<Static>` IMiddleware

**Ƭ IMiddleware**: *`Koa.Middleware`<`StateT`, `CustomT` & `IRouterParamContext`<`StateT`, `CustomT`>>*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:69*

___
<a id="routercontext"></a>

### `<Static>` RouterContext

**Ƭ RouterContext**: *`Koa.ParameterizedContext`<`StateT`, `CustomT` & `IRouterParamContext`<`StateT`, `CustomT`>>*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:62*

___

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AppRouter**(opt?: *`Router.IRouterOptions`*): [AppRouter](_router_.approuter.md)

*Inherited from Router.__constructor*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:164*

Create a new router.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opt | `Router.IRouterOptions` |

**Returns:** [AppRouter](_router_.approuter.md)

___

## Properties

<a id="params"></a>

###  params

**● params**: *`Object`*

*Inherited from Router.params*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:163*

___
<a id="stack"></a>

###  stack

**● stack**: *`Array`<`Layer`>*

*Inherited from Router.stack*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:164*

___

## Methods

<a id="all"></a>

###  all

▸ **all**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **all**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **all**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **all**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.all*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:427*

Register route with all methods.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.all*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:432*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.all*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:436*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.all*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:442*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="allowedmethods"></a>

###  allowedMethods

▸ **allowedMethods**(options?: *`Router.IRouterAllowedMethodsOptions`*): `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.allowedMethods*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:468*

Returns separate middleware for responding to `OPTIONS` requests with an `Allow` header containing the allowed methods, as well as responding with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `Router.IRouterAllowedMethodsOptions` |

**Returns:** `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

___
<a id="del"></a>

###  del

▸ **del**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **del**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **del**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **del**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.del*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:331*

Alias for `router.delete()` because delete is a reserved word

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.del*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:336*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.del*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:340*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.del*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:346*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="delete"></a>

###  delete

▸ **delete**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **delete**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **delete**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **delete**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.delete*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:307*

HTTP delete method

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.delete*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:312*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.delete*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:316*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.delete*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:322*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="get"></a>

###  get

▸ **get**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **get**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **get**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **get**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.get*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:187*

HTTP get method

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.get*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:192*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.get*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:196*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.get*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:202*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="head"></a>

###  head

▸ **head**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **head**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **head**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **head**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.head*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:355*

HTTP head method

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.head*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:360*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.head*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:364*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.head*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:370*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="link"></a>

###  link

▸ **link**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **link**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **link**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **link**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.link*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:259*

HTTP link method

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.link*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:264*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.link*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:268*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.link*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:274*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="match"></a>

###  match

▸ **match**(path: *`string`*, method: *`string`*): `IRoutesMatch`

*Inherited from Router.match*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:520*

Match given `path` and return corresponding routes.

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |
| method | `string` |

**Returns:** `IRoutesMatch`

___
<a id="middleware"></a>

###  middleware

▸ **middleware**(): `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.middleware*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:461*

Returns router middleware which dispatches a route matching the request.

**Returns:** `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

___
<a id="options"></a>

###  options

▸ **options**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **options**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **options**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **options**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.options*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:379*

HTTP options method

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.options*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:384*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.options*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:388*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.options*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:394*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="param"></a>

###  param

▸ **param**(param: *`string`*, middleware: *`IParamMiddleware`*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.param*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:525*

Run middleware for named route parameters. Useful for auto-loading or validation.

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `string` |
| middleware | `IParamMiddleware` |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

___
<a id="patch"></a>

###  patch

▸ **patch**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **patch**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **patch**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **patch**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.patch*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:403*

HTTP path method

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.patch*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:408*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.patch*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:412*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.patch*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:418*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="post"></a>

###  post

▸ **post**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **post**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **post**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **post**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.post*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:211*

HTTP post method

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.post*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:216*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.post*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:220*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.post*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:226*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="prefix"></a>

###  prefix

▸ **prefix**(prefix: *`string`*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.prefix*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:451*

Set the path prefix for a Router instance that was already initialized.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `string` |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

___
<a id="put"></a>

###  put

▸ **put**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **put**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **put**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **put**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.put*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:235*

HTTP put method

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.put*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:240*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.put*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:244*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.put*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:250*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="redirect"></a>

###  redirect

▸ **redirect**(source: *`string`*, destination: *`string`*, code?: *`undefined` \| `number`*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.redirect*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:477*

Redirect `source` to `destination` URL with optional 30x status `code`.

Both `source` and `destination` can be route names.

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | `string` |
| destination | `string` |
| `Optional` code | `undefined` \| `number` |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

___
<a id="register"></a>

###  register

▸ **register**(path: *`string` \| `RegExp`*, methods: *`string`[]*, middleware: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>*, opts?: *`Object`*): `Layer`

*Inherited from Router.register*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:482*

Create and register a route.

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` |
| methods | `string`[] |
| middleware | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)> |
| `Optional` opts | `Object` |

**Returns:** `Layer`

___
<a id="route"></a>

###  route

▸ **route**(name: *`string`*): `Layer`

▸ **route**(name: *`string`*): `boolean`

*Inherited from Router.route*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:492*

Lookup route with given `name`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Layer`

*Inherited from Router.route*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:493*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `boolean`

___
<a id="routes"></a>

###  routes

▸ **routes**(): `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.routes*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:456*

Returns router middleware which dispatches a route matching the request.

**Returns:** `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

___
<a id="unlink"></a>

###  unlink

▸ **unlink**(name: *`string`*, path: *`string` \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **unlink**(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **unlink**<`T`,`U`>(name: *`string`*, path: *`string` \| `RegExp`*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

▸ **unlink**<`T`,`U`>(path: *`string` \| `RegExp` \| (`string` \| `RegExp`)[]*, middleware: *`Koa.Middleware`<`T`, `U`>*, routeHandler: *`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>*): `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.unlink*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:283*

HTTP unlink method

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.unlink*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:288*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.unlink*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:292*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| path | `string` \| `RegExp` |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

*Inherited from Router.unlink*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:298*

**Type parameters:**

#### T 
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` \| (`string` \| `RegExp`)[] |
| middleware | `Koa.Middleware`<`T`, `U`> |
| routeHandler | `Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md) & `T`, [CustomContext](../interfaces/_router_.customcontext.md) & `U`>

___
<a id="url"></a>

###  url

▸ **url**(name: *`string`*, params: *`any`*, options?: *`Router.IUrlOptionsQuery`*): `string`

▸ **url**(name: *`string`*, params: *`any`*, options?: *`Router.IUrlOptionsQuery`*): `Error`

*Inherited from Router.url*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:514*

Generate URL for route. Takes either map of named `params` or series of arguments (for regular expression routes)

router = new Router(); router.get('user', "/users/:id", ...

router.url('user', { id: 3 }); // => "/users/3"

Query can be generated from third argument:

router.url('user', { id: 3 }, { query: { limit: 1 } }); // => "/users/3?limit=1"

router.url('user', { id: 3 }, { query: "limit=1" }); // => "/users/3?limit=1"

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| params | `any` |
| `Optional` options | `Router.IUrlOptionsQuery` |

**Returns:** `string`

*Inherited from Router.url*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:515*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| params | `any` |
| `Optional` options | `Router.IUrlOptionsQuery` |

**Returns:** `Error`

___
<a id="use"></a>

###  use

▸ **use**(...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

▸ **use**(path: *`string` \| `string`[] \| `RegExp`*, ...middleware: *`Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>>*): `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.use*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:178*

Use given middleware.

Middleware run in the order they are defined by `.use()`. They are invoked sequentially, requests start at the first middleware and work their way "down" the middleware stack.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

*Inherited from Router.use*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:179*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `string`[] \| `RegExp` |
| `Rest` middleware | `Array`<`Router.IMiddleware`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>> |

**Returns:** `Router`<[CustomState](../interfaces/_router_.customstate.md), [CustomContext](../interfaces/_router_.customcontext.md)>

___
<a id="url-1"></a>

### `<Static>` url

▸ **url**(path: *`string` \| `RegExp`*, params: *`Object`*): `string`

*Inherited from Router.url*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:530*

Generate URL from url pattern and given `params`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `RegExp` |
| params | `Object` |

**Returns:** `string`

___

