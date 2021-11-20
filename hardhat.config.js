require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim()



module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/2e7045ea99834be69200c714b6b3d64d${process.env.PROJECT_ID}`,
      accounts: [privateKey],
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};