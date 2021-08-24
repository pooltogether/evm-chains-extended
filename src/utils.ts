import { IChainData, getAllChains as upstreamGetAllChains } from 'evm-chains'
import { chainsExtraData } from './chainsExtraData'
import { additionalChains } from './additionalChains'
import { IChainDataExtended, IAddEthereumChainParameter } from './types'

const mergeArrays = (params: {
  mergeArray: Array<any>
  existingArray: Array<any>
  matchKey: string
}) => {
  const { mergeArray, existingArray, matchKey } = params

  return mergeArray.map((mergeArrayItem) => {
    const match = existingArray.find(
      (existingArrayItem) => existingArrayItem[matchKey] === mergeArrayItem[matchKey]
    )
    if (match) {
      return Object.assign(mergeArrayItem, match)
    }
    return mergeArrayItem
  })
}

export function getAllChains(): IChainDataExtended[] {
  let allChains: IChainDataExtended[] = []

  try {
    const chainsData: IChainData[] = upstreamGetAllChains().concat(additionalChains)
    allChains = mergeArrays({
      mergeArray: chainsData,
      existingArray: chainsExtraData,
      matchKey: 'chainId'
    })
  } catch (e) {
    console.warn(e)
  }

  return allChains
}

export function getChain(chainId: number): IChainDataExtended {
  let chain

  try {
    const chains = getAllChains()
    chain = chains.find((x) => x.chainId === chainId)
  } catch (e) {
    console.warn(e)
  }

  return chain
}

export function getChainByChainId(chainId: number): IChainDataExtended {
  return getChain(chainId)
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
