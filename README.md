
<a name="readmemd"></a>

# @raydeck/usemetamask
React Components and hooks for interacting with metamask. Built with [metamask-ts](https://npmjs.com/package/@raydeck/metamask-ts)

<a name="_librarymd"></a>

@raydeck/usemetamask - v1.2.0

# @raydeck/usemetamask - v1.2.0

## Table of contents

### Hooks Functions

- [useAccount](#useaccount)
- [useAccounts](#useaccounts)
- [useChainId](#usechainid)
- [useConnected](#useconnected)
- [useMessage](#usemessage)
- [useReloadOnChainChange](#usereloadonchainchange)

### Other Functions

- [MetamaskConnected](#metamaskconnected)
- [MetamaskDisconnected](#metamaskdisconnected)
- [MetamaskInstalled](#metamaskinstalled)
- [MetamaskNotInstalled](#metamasknotinstalled)
- [MetamaskProvider](#metamaskprovider)
- [MetamaskWrongChain](#metamaskwrongchain)

## Hooks Functions

### useAccount

▸ **useAccount**(): `string`

Returns the current account

**`Example`**

```ts
import { useAccount } from "@raydeck/usemetamask";
const account = useAccount();
```

**`Export`**

#### Returns

`string`

string

___

### useAccounts

▸ **useAccounts**(): `string`[]

Returns the current accounts

**`Example`**

```ts
import { useAccounts } from "@raydeck/usemetamask";
const accounts = useAccounts();
```

**`Export`**

#### Returns

`string`[]

string[]

___

### useChainId

▸ **useChainId**(): `string`

**`Example`**

```ts
import { useChainId } from "@raydeck/usemetamask";
const chainId = useChainId();
```

**`Export`**

#### Returns

`string`

The current chain ID.

___

### useConnected

▸ **useConnected**(): `boolean`

Returns whether the wallet is connected to this site.

**`Example`**

```ts
import { useConnected } from "@raydeck/usemetamask";
const connected = useConnected();
```

**`Export`**

#### Returns

`boolean`

boolean.

___

### useMessage

▸ **useMessage**(): `ProviderMessage`

Returns the current message

**`Example`**

```ts
import { useMessage } from "@raydeck/usemetamask";
const message = useMessage();
```

**`Export`**

#### Returns

`ProviderMessage`

ProviderMessage

___

### useReloadOnChainChange

▸ **useReloadOnChainChange**(): `void`

Trigger a window reload when the chain changes. (best practice)

**`Export`**

**`Example`**

```ts
import { useChainChanged } from "@raydeck/usemetamask";
useChainChanged();
```

#### Returns

`void`

___

## Other Functions

### MetamaskConnected

▸ **MetamaskConnected**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.chainIds?` | `string`[] |
| `props.children` | `ReactNode` |
| `props.unconnected?` | `ReactNode` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

___

### MetamaskDisconnected

▸ **MetamaskDisconnected**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.chainId?` | `string` |
| `props.children` | `ReactNode` |
| `props.connected?` | `ReactNode` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

___

### MetamaskInstalled

▸ **MetamaskInstalled**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children` | `ReactNode` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

___

### MetamaskNotInstalled

▸ **MetamaskNotInstalled**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children` | `ReactNode` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

___

### MetamaskProvider

▸ **MetamaskProvider**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children` | `ReactNode` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

___

### MetamaskWrongChain

▸ **MetamaskWrongChain**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.chainIds?` | `string`[] |
| `props.children` | `ReactNode` |
| `props.unconnected?` | `ReactNode` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>
