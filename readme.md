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

This contract is already deployed on rinkeby at [0xcEFBf0A9Ada7A03056dD08B470AA843ef8ca5D79](https://rinkeby.etherscan.io/address/0xcEFBf0A9Ada7A03056dD08B470AA843ef8ca5D79#code) and on mainnet at [0xb4e903dc14dfe994fe291fc5b385c4718413366d](https://etherscan.io/address/0xb4e903dc14dfe994fe291fc5b385c4718413366d), though to truly test youll have eto deploy your own where you control the owner address.

# Other Resources For Proof of Personhood
- [Marketing Site](https://proofofpersonhood.com/)
- [Marketing Site Code](https://github.com/gitcoinco/proofofpersonhood_com/)
- [Smart Contract (NFT) Code](https://github.com/gitcoinco/PersonhoodPassport)
- [API Clients](https://github.com/gitcoinco/pop_api)
- [Gitcoin Trust Bonus tab](https://gitcoin.co/profile/trust)

