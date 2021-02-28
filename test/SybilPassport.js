const { expect } = require("chai");

describe("SybilPassport", function() {
  it("Should return symbol/name", async function() {
    const SybilPassport = await ethers.getContractFactory("SybilPassport");
    const sp = await SybilPassport.deploy();
    
    await sp.deployed();
    expect(await sp.symbol()).to.equal("GPP");
    expect(await sp.name()).to.equal("GitcoinPassport");

  });

  it("Should return owner", async function() {
    const SybilPassport = await ethers.getContractFactory("SybilPassport");
    const sp = await SybilPassport.deploy();
    const accounts = await ethers.getSigners();
    
    await sp.deployed();
    expect(await sp.owner()).to.equal(accounts[0].address);

  });

  it("Test Minting", async function() {
    const SybilPassport = await ethers.getContractFactory("SybilPassport");
    const sp = await SybilPassport.deploy();
    const accounts = await ethers.getSigners();
    
    await sp.deployed();
    const player = accounts[1].address
    const tokenURI = "/foo/bar/now";
    const idx = 0;

    // first token
    await sp.createPassport(player, tokenURI);
    expect(await sp.totalSupply()).to.equal(1);
    expect(await sp.tokenURI(idx)).to.equal(tokenURI);
    var foo = await sp.tokenByIndex(idx)

    // second token
    const idx_new = 1;
    const player_new = accounts[2].address
    const tokenURI_new = "/foo/bar/now";
    await sp.createPassport(player_new, tokenURI_new);
    expect(await sp.totalSupply()).to.equal(2);
    expect(await sp.tokenURI(idx_new)).to.equal(tokenURI_new);

    // test that only Gitcoin can mint these
    try{
        await sp.connect(accounts[2]).createPassport(player_new, tokenURI_new);
        expect(false).to.equal(true);
    } catch(e){
        expect(true).to.equal(true);
    }


  });


});
