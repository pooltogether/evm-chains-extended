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
  } catch (e) {}

  return allChains
}

export function getChain(chainId: number): IChainDataExtended {
  let chain

  try {
    const chainUpstream = upstreamGetChain(chainId)
    const chainExtended = chainsExtraData.find((x) => x.chainId === chainId)
    chain = { ...chainUpstream, ...chainExtended }
  } catch (e) {}

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
