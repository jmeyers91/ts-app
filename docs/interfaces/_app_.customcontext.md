[ts-app](../README.md) > ["App"](../modules/_app_.md) > [CustomContext](../interfaces/_app_.customcontext.md)

# Interface: CustomContext

Properties added to Koa's `context` object in middleware.

## Hierarchy

**CustomContext**

## Index

### Properties

* [core](_app_.customcontext.md#core)

### Methods

* [fail](_app_.customcontext.md#fail)
* [success](_app_.customcontext.md#success)

---

## Properties

<a id="core"></a>

###  core

**● core**: *[App](../classes/_app_.app.md)*

*Defined in [App.ts:24](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/App.ts#L24)*

___

## Methods

<a id="fail"></a>

###  fail

▸ **fail**(error: *`string`*, status?: *`undefined` \| `number`*): `never`

*Defined in [App.ts:26](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/App.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `string` |
| `Optional` status | `undefined` \| `number` |

**Returns:** `never`

___
<a id="success"></a>

###  success

▸ **success**(body: *`any`*, status?: *`undefined` \| `number`*): `void`

*Defined in [App.ts:25](https://github.com/jmeyers91/ts-app/blob/706bbc4/src/App.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |
| `Optional` status | `undefined` \| `number` |

**Returns:** `void`

___

