[ts-app](../README.md) > ["App"](../modules/_app_.md)

# External module: "App"

## Index

### Classes

* [App](../classes/_app_.app.md)

### Interfaces

* [CustomContext](../interfaces/_app_.customcontext.md)
* [CustomState](../interfaces/_app_.customstate.md)

### Type aliases

* [ModelIndex](_app_.md#modelindex)

### Functions

* [getCustomContext](_app_.md#getcustomcontext)

---

## Type aliases

<a id="modelindex"></a>

###  ModelIndex

**Ƭ ModelIndex**: *`object` & `object`*

*Defined in [App.ts:18](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/App.ts#L18)*

Adds an index signature to `typeof models`.

___

## Functions

<a id="getcustomcontext"></a>

###  getCustomContext

▸ **getCustomContext**(app: *[App](../classes/_app_.app.md)*, context: *`Koa.Context`*): [CustomContext](../interfaces/_app_.customcontext.md)

*Defined in [App.ts:209](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/App.ts#L209)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| app | [App](../classes/_app_.app.md) |
| context | `Koa.Context` |

**Returns:** [CustomContext](../interfaces/_app_.customcontext.md)

___

