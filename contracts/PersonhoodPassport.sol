pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "contracts/VerifySignature.sol";

contract PersonhoodPassport is ERC721, VerifySignature {
    address public owner;

    constructor() ERC721("PersonhoodPassport", "PP") {
      owner = msg.sender;
      _setBaseURI('https://proofofpersonhood.com/passport/');
    }

    /**
    * @dev Creates a new PersonhoodPassport for player at existing address
    * Passport is non transferable, and cannot be replaced
    */
  function createPassport(string memory tokenURI, bytes memory signature, uint _nonce) public returns (uint256) {
      address player = msg.sender;
      require(verify(
          owner,
          player, 0, tokenURI, _nonce,
          signature
      ), "ERC721: must be validated by Gitcoin");
      require(balanceOf(player) == 0, "Address cannot have more than 1 passport");
      uint256 newItemId = totalSupply();
      require(_nonce > newItemId, "Invalid Nonce");

      _mint(player, newItemId);
      _setTokenURI(newItemId, tokenURI);
      return newItemId;
  }

    function noxfr() internal {
        require(false, "PersonhoodPassport's cannot be transfered, try burning this token + minting a new one.");
    }

    function transferFrom(address from, address to, uint256 tokenId) public override {
      noxfr();
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) public override {
      noxfr();
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public override {
      noxfr();
    }

    function burn(uint256 tokenId) public {
      require(ERC721.ownerOf(tokenId) == msg.sender, "ERC721: transfer of token that is not own");
      _burn(tokenId);
    }

}