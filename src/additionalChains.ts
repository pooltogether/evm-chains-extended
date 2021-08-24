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
  },
  {
    name: 'Celo',
    chainId: 42220,
    shortName: 'CELO',
    chain: 'CELO',
    network: 'celo',
    networkId: 42220,
    nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
    rpc: ['https://forno.celo.org'],
    faucets: [],
    infoURL: 'https://docs.celo.org/'
  }
]
