import { getAllChains as upstreamGetAllChains, getChain as upstreamGetChain } from 'evm-chains'
import { chainsExtraData } from './chainsExtraData'
import { IChainDataExtended, IAddEthereumChainParameter } from './types'

const mergeArrays = (arrayOne, arrayTwo) => {
  return arrayOne.map((item, i) => Object.assign({}, item, arrayTwo[i]))
}

export function getAllChains(): IChainDataExtended[] | undefined {
  let allChains: IChainDataExtended[] | undefined

  try {
    allChains = mergeArrays(upstreamGetAllChains(), chainsExtraData)
  } catch (e) {
    console.warn('could not merge arrays for all chains', e)
  }

  return allChains
}

export function getChain(chainId: number): IChainDataExtended {
  let chain

  try {
    const chainUpstream = upstreamGetChain(chainId)
    const chainExtended = chainsExtraData.find((x) => x.chainId === chainId)
    chain = { ...chainUpstream, ...chainExtended }
  } catch (e) {
    console.warn('could not merge data for chain with id: ', chainId, e)
  }

  return chain
}

export function getChainByChainId(chainId: number): IChainDataExtended {
  return getChain(chainId)
}

export function getChainByKeyValue(key: string, value: any): IChainDataExtended | undefined {
  const allChains = getAllChains()

  let chain: IChainDataExtended | undefined

  try {
    const matches = allChains?.filter((chain) => chain[key] === value)

    if (matches && matches.length) {
      chain = matches[0]
    }

    if (!chain) {
      throw new Error(`No chain found matching ${key}: ${value}`)
    }
  } catch (e) {}

  return chain
}

export function getChainByNetworkId(networkId: number): IChainDataExtended | undefined {
  return getChainByKeyValue('networkId', networkId)
}

export function convertNetworkIdToChainId(networkId: number): number | undefined {
  const chain = getChainByNetworkId(networkId)
  return chain?.chainId
}

export function convertChainIdToNetworkId(chainId: number): number | undefined {
  const chain = getChain(chainId)
  return chain?.networkId
}

// format for EIP3085 wallet_addEthereumChain
export function formatNetworkForAddEthereumChain(
  network: IChainDataExtended
): IAddEthereumChainParameter {
  let formattedNetwork: IAddEthereumChainParameter = {
    chainId: `0x${network.chainId.toString(16)}`,
    chainName: network.name,
    nativeCurrency: network.nativeCurrency,
    rpcUrls: network.rpc,
    blockExplorerUrls: network.blockExplorerUrls
  }

  return formattedNetwork
}
