# **App Name**: Base Chain Portfolio

## Core Features:

- Wallet Connection: Connect to multiple blockchain networks using Reown AppKit (WalletConnect).  Supports Base Sepolia, Sepolia, and Polygon Mumbai testnets.
- Multi-Chain Portfolio Aggregation: Aggregate token balances and calculate total portfolio value in USD across multiple testnets (Base Sepolia, Sepolia, Polygon Mumbai).
- Portfolio Visualization: Display portfolio allocation using interactive charts (pie chart for token allocation, line chart for historical value, bar chart for chain distribution).
- Copy Trading Portfolios: Create, share, and browse public copy trading portfolios.  Follow other users' portfolios and track their performance.
- Smart Contract Integration: Deploy and interact with a PortfolioTracker smart contract on Base Sepolia to track portfolio metadata and snapshots.
- Data Storage: Store user data, portfolio configurations, and historical snapshots in Supabase. Uses NEXT_PUBLIC_SUPABASE_URL=https://mtukkeogwopnshcspbvb.supabase.co and NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dWtrZW9nd29wbnNoY3NwYnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMTIxMjQsImV4cCI6MjA3Njg4ODEyNH0.zXgNaaeq23KlJR-LMLuy3TiKniUu-Lc0Mh9hNOcpXu0.

## Style Guidelines:

- Primary color: Electric blue (#7DF9FF) for a futuristic and decentralized feel.
- Background color: Dark charcoal (#222831) for a sophisticated dark mode experience.
- Accent color: Neon green (#39FF14) to highlight key metrics and interactive elements.
- Headline font: 'Space Grotesk', a proportional sans-serif with a techy feel.
- Body font: 'Inter', a grotesque-style sans-serif for a modern, machined look.
- Note: currently only Google Fonts are supported.
- Use crisp, modern icons from 'lucide-react' to represent different tokens and chains.
- Employ a clean, dashboard-style layout with well-defined sections for portfolio overview, charts, and copy trading features.
- Use subtle transitions and loading animations to enhance user experience during data fetching and wallet interactions.