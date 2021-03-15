# PersonhoodPassport

Solidity Contracts for NFT 

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

This contract is already deployed on rinkeby at [0xcEFBf0A9Ada7A03056dD08B470AA843ef8ca5D79](https://rinkeby.etherscan.io/address/0xcEFBf0A9Ada7A03056dD08B470AA843ef8ca5D79#code) and on mainnet at [0xcf553bEF97A83Eb05d3e694DA8803a2ab2466338](https://etherscan.io/address/0xcf553bEF97A83Eb05d3e694DA8803a2ab2466338), though to truly test youll have eto deploy your own where you control the owner address.
