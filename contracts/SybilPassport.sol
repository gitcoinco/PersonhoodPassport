pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SybilPassport is ERC721 {
    address public owner;

    constructor() ERC721("GitcoinPassport", "GPP") {
      owner = msg.sender;
    }

  function createPassport(address player, string memory tokenURI) public returns (uint256) {
      require(msg.sender == owner, "ERC721: must be validated by Gitcoin");
      uint256 newItemId = totalSupply();
      _mint(player, newItemId);
      _setTokenURI(newItemId, tokenURI);
      return newItemId;
  }

}