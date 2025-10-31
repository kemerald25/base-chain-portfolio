import type { Token, Chain, PortfolioHistory, PublicPortfolio } from '@/types';

export const mockTokens: Token[] = [
  {
    id: '1',
    name: 'Ethereum',
    symbol: 'ETH',
    logo: '/tokens/eth.svg',
    balance: 2.5,
    value: 8750,
    chain: 'Base Sepolia',
    price: 3500,
    percentage: 43.75,
  },
  {
    id: '2',
    name: 'USD Coin',
    symbol: 'USDC',
    logo: '/tokens/usdc.svg',
    balance: 5000,
    value: 5000,
    chain: 'Base Sepolia',
    price: 1.0,
    percentage: 25.0,
  },
  {
    id: '3',
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    logo: '/tokens/wbtc.svg',
    balance: 0.05,
    value: 3500,
    chain: 'Sepolia',
    price: 70000,
    percentage: 17.5,
  },
  {
    id: '4',
    name: 'Polygon',
    symbol: 'MATIC',
    logo: '/tokens/matic.svg',
    balance: 2000,
    value: 1400,
    chain: 'Polygon Mumbai',
    price: 0.7,
    percentage: 7.0,
  },
  {
    id: '5',
    name: 'Dai',
    symbol: 'DAI',
    logo: '/tokens/dai.svg',
    balance: 1350,
    value: 1350,
    chain: 'Sepolia',
    price: 1.0,
    percentage: 6.75,
  },
];

export const mockChains: Chain[] = [
  { name: 'Base Sepolia', id: 84532, icon: '/chains/base.svg', value: 13750 },
  { name: 'Sepolia', id: 11155111, icon: '/chains/ethereum.svg', value: 4850 },
  { name: 'Polygon Mumbai', id: 80001, icon: '/chains/polygon.svg', value: 1400 },
];

export const mockHistory: PortfolioHistory[] = [
  { date: '2024-07-01', value: 18500 },
  { date: '2024-07-02', value: 18750 },
  { date: '2024-07-03', value: 19200 },
  { date: '2024-07-04', value: 19100 },
  { date: '2024-07-05', value: 19800 },
  { date: '2024-07-06', value: 20500 },
  { date: '2024-07-07', value: 20000 },
];

export const mockPublicPortfolios: PublicPortfolio[] = [
    {
        id: '1',
        name: 'DeFi Degen',
        description: 'High-risk, high-reward strategy focusing on new and emerging DeFi protocols.',
        owner: { name: '0xChad', avatar: 'https://i.pravatar.cc/150?u=0xChad' },
        totalValue: 125430.21,
        followers: 1234,
        dailyChange: 5.2,
        tokens: [mockTokens[0], mockTokens[1], mockTokens[2]],
    },
    {
        id: '2',
        name: 'Stable Growth',
        description: 'A conservative portfolio holding blue-chip assets for long-term growth.',
        owner: { name: 'CryptoGiga', avatar: 'https://i.pravatar.cc/150?u=CryptoGiga' },
        totalValue: 89234.5,
        followers: 876,
        dailyChange: -1.1,
        tokens: [mockTokens[1], mockTokens[3], mockTokens[4]],
    },
    {
        id: '3',
        name: 'ETH Maxi',
        description: 'All-in on the Ethereum ecosystem. Includes L2s and liquid staking derivatives.',
        owner: { name: 'EtherFan', avatar: 'https://i.pravatar.cc/150?u=EtherFan' },
        totalValue: 56000.0,
        followers: 512,
        dailyChange: 2.5,
        tokens: [mockTokens[0], mockTokens[4]],
    },
    {
        id: '4',
        name: 'Altcoin Explorer',
        description: 'A diversified portfolio of promising altcoins with strong fundamentals.',
        owner: { name: 'AltScout', avatar: 'https://i.pravatar.cc/150?u=AltScout' },
        totalValue: 45876.99,
        followers: 450,
        dailyChange: 12.3,
        tokens: [mockTokens[2], mockTokens[3]],
    }
]
