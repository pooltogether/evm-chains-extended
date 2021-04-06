export interface IChainExtraData {
  blockExplorerUrls: string[]
  chainId: number
}

export interface IChainDataExtended {
  name: string
  chainId: number
  shortName: string
  chain: string
  network: string
  networkId: number
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpc: string[]
  faucets: string[]
  infoURL: string
  blockExplorerUrls: string[]
}

export interface IAddEthereumChainParameter {
  chainId: string // A 0x-prefixed hexadecimal string
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string // 2-6 characters long
    decimals: number
  }
  rpcUrls: string[]
  blockExplorerUrls?: string[]
  iconUrls?: string[] // Currently ignored.
}
