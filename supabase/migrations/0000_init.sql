-- Initial Schema for Base Chain Portfolio

-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    avatar VARCHAR(255),
    wallet_address VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Portfolios Table
CREATE TABLE portfolios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
CREATE INDEX idx_portfolios_user_id ON portfolios(user_id);

-- Tokens Table (for static token information)
CREATE TABLE tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    symbol VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(255),
    coingecko_id VARCHAR(100) -- For fetching price data
);

-- Chains Table
CREATE TABLE chains (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    icon_url VARCHAR(255)
);

-- Portfolio Wallets Table (to link multiple wallet addresses to a portfolio)
CREATE TABLE portfolio_wallets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    portfolio_id UUID REFERENCES portfolios(id) ON DELETE CASCADE,
    wallet_address VARCHAR(255) NOT NULL,
    UNIQUE(portfolio_id, wallet_address)
);
CREATE INDEX idx_portfolio_wallets_portfolio_id ON portfolio_wallets(portfolio_id);


-- Portfolio Followers Table
CREATE TABLE portfolio_followers (
    portfolio_id UUID REFERENCES portfolios(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    PRIMARY KEY (portfolio_id, user_id)
);

-- Portfolio History Table (for snapshots)
CREATE TABLE portfolio_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    portfolio_id UUID REFERENCES portfolios(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    total_value NUMERIC(20, 2) NOT NULL,
    UNIQUE(portfolio_id, date)
);
CREATE INDEX idx_portfolio_history_portfolio_id ON portfolio_history(portfolio_id);


-- Insert initial static data

-- Chains
INSERT INTO chains (id, name, icon_url) VALUES
(84532, 'Base Sepolia', '/chains/base.svg'),
(11155111, 'Sepolia', '/chains/ethereum.svg'),
(80001, 'Polygon Mumbai', '/chains/polygon.svg');

-- Tokens
INSERT INTO tokens (symbol, name, logo_url, coingecko_id) VALUES
('ETH', 'Ethereum', '/tokens/eth.svg', 'ethereum'),
('USDC', 'USD Coin', '/tokens/usdc.svg', 'usd-coin'),
('WBTC', 'Wrapped Bitcoin', '/tokens/wbtc.svg', 'wrapped-bitcoin'),
('MATIC', 'Polygon', '/tokens/matic.svg', 'matic-network'),
('DAI', 'Dai', '/tokens/dai.svg', 'dai');
