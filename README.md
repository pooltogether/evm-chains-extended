# evm-chains

Package to query chain data from [ethereum-lists/chains](https://github.com/ethereum-lists/chains) with extended data for EIP3085 including Block Explorer URLs and network logos.

## Install

```sh
npm install --save evm-chains

#or

yarn add evm-chains
```

## API

```typescript
function getAllChains(): IChainData[];
function getChain(chainId: number): IChainData;
function getChainByChainId(chainId: number): IChainData;
function getChainByKeyValue(key: string, value: any): IChainData;
function getChainByNetworkId(networkId: number): IChainData;
function convertNetworkIdToChainId(networkId: number): number;
function convertChainIdToNetworkId(chainId: number): number;
function formatNetworkForAddEthereumChain(network: IChainData): IAddEthereumChainParameter;
```

## Types

```typescript
interface IChainData {
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
