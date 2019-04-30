[learn-jenkins](../README.md) > ["Router"](../modules/_router_.md) > [AppRouter](../classes/_router_.approuter.md) > [IRouterAllowedMethodsOptions](../interfaces/_router_.approuter.irouterallowedmethodsoptions.md)

# Interface: IRouterAllowedMethodsOptions

## Hierarchy

**IRouterAllowedMethodsOptions**

## Index

### Properties

* [methodNotAllowed](_router_.approuter.irouterallowedmethodsoptions.md#methodnotallowed)
* [notImplemented](_router_.approuter.irouterallowedmethodsoptions.md#notimplemented)
* [throw](_router_.approuter.irouterallowedmethodsoptions.md#throw)

---

## Properties

<a id="methodnotallowed"></a>

### `<Optional>` methodNotAllowed

**● methodNotAllowed**: *`undefined` \| `function`*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:88*

throw the returned value in place of the default MethodNotAllowed error

___
<a id="notimplemented"></a>

### `<Optional>` notImplemented

**● notImplemented**: *`undefined` \| `function`*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:84*

throw the returned value in place of the default NotImplemented error

___
<a id="throw"></a>

### `<Optional>` throw

**● throw**: *`undefined` \| `false` \| `true`*

*Defined in /Users/james/projects/ts-app/node_modules/@types/koa-router/index.d.ts:80*

throw error instead of setting status and header

___

