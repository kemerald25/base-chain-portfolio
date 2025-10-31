'use server';

import { supabase } from '@/lib/supabase/client';
import type { PublicPortfolio, Token } from '@/types';

// This is a simplified example. A real implementation would involve:
// 1. Fetching token balances for all wallets associated with a portfolio.
// 2. Fetching current market prices for each token.
// 3. Calculating total values and daily changes.
// For now, we will simulate some of this data but fetch the core portfolio info from Supabase.

export async function getPublicPortfolios(): Promise<PublicPortfolio[]> {
  const { data: portfolios, error } = await supabase
    .from('portfolios')
    .select(
      `
      id,
      name,
      description,
      owner:users (
        name,
        avatar
      )
    `
    )
    .eq('is_public', true);

  if (error) {
    console.error('Error fetching public portfolios:', error);
    return [];
  }

  // The 'owner' from Supabase is an object, but our type expects it directly.
  // We need to transform the data to match the expected `PublicPortfolio` type.
  const transformedPortfolios = portfolios.map((p: any) => ({
    ...p,
    owner: p.owner,
    // Mocking dynamic data for now
    totalValue: Math.random() * 150000 + 50000,
    followers: Math.floor(Math.random() * 2000),
    dailyChange: (Math.random() - 0.5) * 20,
    tokens: [], // In a real app, you'd fetch and calculate this
  }));

  return transformedPortfolios;
}

// Dummy function to simulate fetching data for the main dashboard.
// In a real app, this would be based on the logged-in user.
export async function getDashboardData() {
    const totalValue = 20000 + (Math.random() - 0.5) * 2000;
    const dailyChange = (Math.random() - 0.4) * 5;
    const dailyProfit = totalValue * (dailyChange / 100);

    const followedPortfolios = await getPublicPortfolios();

    return {
        overview: {
            totalValue,
            dailyChange,
            dailyProfit,
        },
        charts: {
            // These would also be calculated from on-chain data
            tokens: [
              { name: 'Ethereum', value: 8750 },
              { name: 'USD Coin', value: 5000 },
              { name: 'Wrapped Bitcoin', value: 3500 },
              { name: 'Polygon', value: 1400 },
              { name: 'Dai', value: 1350 },
            ],
            chains: [
              { name: 'Base Sepolia', value: 13750 },
              { name: 'Sepolia', value: 4850 },
              { name: 'Polygon Mumbai', value: 1400 },
            ],
            history: [
              { date: 'Jul 01', value: 18500 },
              { date: 'Jul 02', value: 18750 },
              { date: 'Jul 03', value: 19200 },
              { date: 'Jul 04', value: 19100 },
              { date: 'Jul 05', value: 19800 },
              { date: 'Jul 06', value: 20500 },
              { date: 'Jul 07', value: 20000 },
            ],
        },
        followed: followedPortfolios.slice(0,3)
    }
}
