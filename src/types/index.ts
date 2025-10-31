export type Token = {
  name: string;
  symbol: string;
  logo: string;
  balance: number;
  value: number;
  chain: string;
  price: number;
  percentage: number;
};

export type Chain = {
  name: string;
  id: number;
  icon: string;
  value: number;
};

export type PortfolioHistory = {
  date: string;
  value: number;
};

export type PublicPortfolio = {
  id: string;
  name: string;
  description: string;
  owner: {
    name: string;
    avatar: string;
  };
  totalValue: number;
  followers: number;
  dailyChange: number;
  tokens: Token[];
};
