
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/FXusRXmUBUtnaqizppFhUuQE3E3YV2cB',
      accounts: ['d3e78ff2608b72489ecd298dd5980225d48795477f216e87a607a3bd628a2c73'],
    },
  },
};