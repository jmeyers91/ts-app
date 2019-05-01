[ts-app](../README.md) > ["utils/checkPassword"](../modules/_utils_checkpassword_.md)

# External module: "utils/checkPassword"

## Index

### Functions

* [checkPassword](_utils_checkpassword_.md#checkpassword)

---

## Functions

<a id="checkpassword"></a>

###  checkPassword

▸ **checkPassword**(password: *`string`*, hashedPassword: *`string`*): `Promise`<`boolean`>

*Defined in [utils/checkPassword.ts:11](https://github.com/jmeyers91/ts-app/blob/0a84084/src/utils/checkPassword.ts#L11)*

Compares a plain text password with a hashed password. Returns a promise that resolves `true` if the passwords match.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| password | `string` |  The plain text password to check. |
| hashedPassword | `string` |  The hashed password to compare against. |

**Returns:** `Promise`<`boolean`>
True if the passwords match.

___

