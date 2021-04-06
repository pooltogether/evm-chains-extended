# evm-chains

Package to query chain data from [ethereum-lists/chains](https://github.com/ethereum-lists/chains) with extended data necessary for EIP3085.

Makes use of Pedro Gomes' [evm-chains](https://github.com/pedrouid/evm-chains) package for the initial data, then merges in the extended data.

Includes Block Explorer URLs and network logos for certain networks.

## Install

```sh
npm install --save evm-chains-extended

#or

yarn add evm-chains-extended
```

## API

```typescript
function getAllChains(): IChainDataExtended[] | undefined;
function getChain(chainId: number): IChainDataExtended | undefined;
function getChainByChainId(chainId: number): IChainDataExtended | undefined;
function getChainByKeyValue(key: string, value: any): IChainDataExtended | undefined;
function getChainByNetworkId(networkId: number): IChainDataExtended | undefined;
function convertNetworkIdToChainId(networkId: number): number | undefined;
function convertChainIdToNetworkId(chainId: number): number | undefined;
function formatNetworkForAddEthereumChain(network: IChainDataExtended): IAddEthereumChainParameter;
```

## Logos

To use network logos import into your dapp:

```typescript
import EthLogo from '@pooltogether/evm-chains-extended/dist/umd/images/eth-logo.png'
import BscLogo from '@pooltogether/evm-chains-extended/dist/umd/images/bsc-logo.png'
import BscLogo2 from '@pooltogether/evm-chains-extended/dist/umd/images/bsc-logo-2.png'
import PoALogo from '@pooltogether/evm-chains-extended/dist/umd/images/poa-logo.png'
import PolygonLogo from '@pooltogether/evm-chains-extended/dist/umd/images/polygon-matic-logo.png'
import XDaiLogo from '@pooltogether/evm-chains-extended/dist/umd/images/xdai-logo.png'
```

If anyone knows how to change this syntax to simply `import XDaiLogo from '@pooltogether/evm-chains-extended'` hit us up!

```jsx
// then:
<img src={XDaiLogo} />
```

## Types

```typescript
interface IChainDataExtended {
  name: string;
  chainId: number;
  shortName: string;
  chain: string;
  network: string;
  networkId: number;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpc: string[];
  faucets: string[];
  infoURL: string;
  blockExplorerUrls: string[]
}

// format for EIP3085 wallet_addEthereumChain
interface IAddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}
```

## Data Source

[https://github.com/ethereum-lists/chains](https://github.com/ethereum-lists/chains)
