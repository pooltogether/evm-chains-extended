import { IChainData } from 'evm-chains'

export const additionalChains: IChainData[] = [
  {
    name: 'Celo Alfajores Testnet',
    chainId: 44787,
    shortName: 'ALFA',
    chain: 'CELO',
    network: 'alfajores',
    networkId: 44787,
    nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
    rpc: ['https://alfajores-forno.celo-testnet.org', 'wss://alfajores-forno.celo-testnet.org/ws'],
    faucets: [
      'https://celo.org/developers/faucet',
      'https://cauldron.pretoriaresearchlab.io/alfajores-faucet'
    ],
    infoURL: 'https://docs.celo.org/'
  }
]
