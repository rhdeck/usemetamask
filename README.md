
<a name="readmemd"></a>

# usemetamask
React Components and hooks for interacting with metamask. Built with [metamask-ts](https://npmjs.com/package/@raydeck/metamask-ts)

<a name="_librarymd"></a>

@raydeck/usemetamask - v1.0.0

# @raydeck/usemetamask - v1.0.0

## Table of contents

### Functions

- [MetamaskConnected](#metamaskconnected)
- [MetamaskDisconnected](#metamaskdisconnected)
- [MetamaskProvider](#metamaskprovider)
- [useAccounts](#useaccounts)
- [useChainId](#usechainid)
- [useConnected](#useconnected)
- [useMessage](#usemessage)

## Functions

### MetamaskConnected

▸ **MetamaskConnected**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.chainId?` | `string` |
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

### useAccounts

▸ **useAccounts**(): `string`[]

#### Returns

`string`[]

___

### useChainId

▸ **useChainId**(): `string`

#### Returns

`string`

___

### useConnected

▸ **useConnected**(): `boolean`

#### Returns

`boolean`

___

### useMessage

▸ **useMessage**(): `ProviderMessage`

#### Returns

`ProviderMessage`
