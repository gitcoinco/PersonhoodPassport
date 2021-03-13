# NFTPassport

1. Install some things

```
# hardhat
npm install --save-dev hardhat

# and plugins
npm install --save-dev @nomiclabs/hardhat-etherscan
npm install hardhat-gas-reporter --save-dev

# and dependancies
npm install @openzeppelin/contracts

```

2. clone this rep
3. from the repo working directory

```
# run a local node
npx hardhat node

# compile
npx hardhat compile

# run the tests
npx hardhat test

# deploy a contract
npx hardhat run --network rinkeby scripts/deploy.js

# verify a deployed contract
npx hardhat verify --network rinkeby DEPLOYED_CONTRACT_ADDRESS 


```


# Already Deployed

This contract is already deployed on rinkeby at [0x06752ad6a98dba67a2d7cd6239c187a7e937f3b3](https://rinkeby.etherscan.io/address/0x06752ad6a98dba67a2d7cd6239c187a7e937f3b3#code) and on mainnet at [0x88d2Ea7C2349a6107C77b0D50675843369086462](https://etherscan.io/address/0x88d2Ea7C2349a6107C77b0D50675843369086462), though to truly test youll have eto deploy your own where you control the owner address.
