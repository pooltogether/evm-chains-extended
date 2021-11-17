import { IChainData } from 'evm-chains'

export interface IChainExtraData {
  chainId: number
  blockExplorerUrls: string[]
  rpc?: string[]
}

export interface IChainDataExtended extends IChainData, Omit<IChainExtraData, 'rpc'> {
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
