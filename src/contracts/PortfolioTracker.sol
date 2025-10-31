// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract PortfolioTracker is Ownable, ReentrancyGuard {
    struct Portfolio {
        uint256 id;
        address owner;
        string name;
        string description;
        address[] trackedWallets;
        uint256 totalValueUSD; // in wei (multiply by 1e18)
        uint256 createdAt;
        uint256 updatedAt;
        bool isPublic;
    }
    
    struct PortfolioSnapshot {
        uint256 portfolioId;
        uint256 totalValueUSD;
        uint256 timestamp;
    }
    
    mapping(uint256 => Portfolio) public portfolios;
    mapping(uint256 => PortfolioSnapshot[]) public snapshots;
    mapping(address => uint256[]) public userPortfolios;
    
    uint256 public portfolioCount;
    
    event PortfolioCreated(
        uint256 indexed portfolioId, 
        address indexed owner, 
        string name,
        bool isPublic
    );
    event PortfolioUpdated(uint256 indexed portfolioId, uint256 timestamp);
    event WalletTracked(uint256 indexed portfolioId, address wallet);
    event SnapshotRecorded(uint256 indexed portfolioId, uint256 valueUSD, uint256 timestamp);
    
    constructor() Ownable(msg.sender) {}
    
    function createPortfolio(
        string memory _name,
        string memory _description,
        address[] memory _wallets,
        bool _isPublic
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Name required");
        require(_wallets.length > 0, "At least one wallet required");
        
        uint256 portfolioId = portfolioCount++;
        
        Portfolio storage newPortfolio = portfolios[portfolioId];
        newPortfolio.id = portfolioId;
        newPortfolio.owner = msg.sender;
        newPortfolio.name = _name;
        newPortfolio.description = _description;
        newPortfolio.trackedWallets = _wallets;
        newPortfolio.totalValueUSD = 0;
        newPortfolio.createdAt = block.timestamp;
        newPortfolio.updatedAt = block.timestamp;
        newPortfolio.isPublic = _isPublic;
        
        userPortfolios[msg.sender].push(portfolioId);
        
        emit PortfolioCreated(portfolioId, msg.sender, _name, _isPublic);
        
        for (uint i = 0; i < _wallets.length; i++) {
            emit WalletTracked(portfolioId, _wallets[i]);
        }
        
        return portfolioId;
    }
    
    function addTrackedWallet(uint256 _portfolioId, address _wallet) public {
        require(portfolios[_portfolioId].owner == msg.sender, "Not owner");
        portfolios[_portfolioId].trackedWallets.push(_wallet);
        portfolios[_portfolioId].updatedAt = block.timestamp;
        
        emit WalletTracked(_portfolioId, _wallet);
        emit PortfolioUpdated(_portfolioId, block.timestamp);
    }
    
    function recordSnapshot(uint256 _portfolioId, uint256 _valueUSD) public {
        require(portfolios[_portfolioId].owner == msg.sender, "Not owner");
        
        portfolios[_portfolioId].totalValueUSD = _valueUSD;
        portfolios[_portfolioId].updatedAt = block.timestamp;
        
        snapshots[_portfolioId].push(PortfolioSnapshot({
            portfolioId: _portfolioId,
            totalValueUSD: _valueUSD,
            timestamp: block.timestamp
        }));
        
        emit SnapshotRecorded(_portfolioId, _valueUSD, block.timestamp);
    }
    
    function getTrackedWallets(uint256 _portfolioId) public view returns (address[] memory) {
        return portfolios[_portfolioId].trackedWallets;
    }
    
    function getPortfolio(uint256 _portfolioId) public view returns (Portfolio memory) {
        return portfolios[_portfolioId];
    }
    
    function getUserPortfolios(address _user) public view returns (uint256[] memory) {
        return userPortfolios[_user];
    }
    
    function getSnapshots(uint256 _portfolioId) public view returns (PortfolioSnapshot[] memory) {
        return snapshots[_portfolioId];
    }
    
    function getPublicPortfolios() public view returns (Portfolio[] memory) {
        uint256 publicCount = 0;
        for (uint256 i = 0; i < portfolioCount; i++) {
            if (portfolios[i].isPublic) {
                publicCount++;
            }
        }
        
        Portfolio[] memory publicPortfolios = new Portfolio[](publicCount);
        uint256 index = 0;
        for (uint256 i = 0; i < portfolioCount; i++) {
            if (portfolios[i].isPublic) {
                publicPortfolios[index] = portfolios[i];
                index++;
            }
        }
        
        return publicPortfolios;
    }
}
