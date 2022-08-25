import { IChainData } from 'evm-chains'

export const additionalChains: IChainData[] = [
  // CELO
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
  },
  // Avalanche
  {
    name: 'Avalanche Mainnet C-Chain',
    chainId: 43114,
    shortName: 'AVAX',
    chain: 'AVAX',
    network: 'mainnet',
    networkId: 43114,
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    rpc: ['https://api.avax.network/ext/bc/C/rpc'],
    faucets: [],
    infoURL: 'https://docs.avax.network/'
  },
  {
    name: 'Avalanche FUJI C-Chain',
    chainId: 43113,
    shortName: 'FUJI',
    chain: 'AVAX',
    network: 'testnet',
    networkId: 43113,
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    rpc: ['https://api.avax-test.network/ext/bc/C/rpc'],
    faucets: [],
    infoURL: 'https://docs.avax.network/'
  },
  // Optimism
  {
    name: 'Optimism Mainnet',
    chainId: 10,
    shortName: 'OP',
    chain: 'OP',
    network: 'mainnet',
    networkId: 10,
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpc: ['https://mainnet.optimism.ioc'],
    faucets: [],
    infoURL: 'https://community.optimism.io/docs/'
  }
]
