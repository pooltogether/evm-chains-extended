import { IChainData, getAllChains as upstreamGetAllChains } from 'evm-chains'
import { chainsExtraData } from './chainsExtraData'
import { additionalChains } from './additionalChains'
import { IChainDataExtended, IAddEthereumChainParameter, IChainExtraData } from './types'

const extendChainDataArray = (chainsData: IChainData[], chainsExtraData: IChainExtraData[]) => {
  return chainsData.map((chainData) => {
    const extraData = chainsExtraData.find(
      (existingArrayItem) => existingArrayItem.chainId === chainData.chainId
    )
    if (extraData) {
      const combinedRpcUrls = extraData.rpc ? [...extraData.rpc, ...chainData.rpc] : chainData.rpc
      return {
        ...chainData,
        blockExplorerUrls: extraData.blockExplorerUrls,
        rpc: combinedRpcUrls
      } as IChainDataExtended
    } else {
      return {
        ...chainData,
        blockExplorerUrls: []
      } as IChainDataExtended
    }
  })
}

export function getAllChains(): IChainDataExtended[] {
  return extendChainDataArray(upstreamGetAllChains().concat(additionalChains), chainsExtraData)
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

export function getNetworkForEip3085(chainId: number) {
  return formatNetworkForAddEthereumChain(getChain(chainId))
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
