const { expect } = require("chai");

describe("PersonhoodPassport", function() {
  it("Should return symbol/name", async function() {
    const PersonhoodPassport = await ethers.getContractFactory("PersonhoodPassport");
    const sp = await PersonhoodPassport.deploy();
    
    await sp.deployed();
    expect(await sp.symbol()).to.equal("GPP");
    expect(await sp.name()).to.equal("PersonhoodPassport");

  });

  it("Should return owner", async function() {
    const PersonhoodPassport = await ethers.getContractFactory("PersonhoodPassport");
    const sp = await PersonhoodPassport.deploy();
    const accounts = await ethers.getSigners();
    
    await sp.deployed();
    expect(await sp.owner()).to.equal(accounts[0].address);

  });

  it("Test Minting", async function() {
    // setup
    const PersonhoodPassport = await ethers.getContractFactory("PersonhoodPassport");
    const sp = await PersonhoodPassport.deploy();
    const accounts = await ethers.getSigners();

    // validate that a first passport can be created
    await sp.deployed();
    const player = accounts[1].address
    const tokenURI = "/foo/bar/now";
    const idx = 0;
    const nonce = 5;
    const hash = await sp.getMessageHash(player, 0, tokenURI, nonce);
    const signature = await accounts[0].signMessage(ethers.utils.arrayify(hash));
    await sp.connect(accounts[1]).createPassport(tokenURI, signature, nonce);
    expect(await sp.totalSupply()).to.equal(1);
    expect(await sp.tokenURI(idx)).to.equal(tokenURI);
    var foo = await sp.tokenByIndex(idx)

    // validate that a second passport can be created, and txn can be sent by a diff account
    const idx_new = 1;
    const player_new = accounts[2].address
    const tokenURI_new = "/foo/bar/now";
    const hash_new = await sp.getMessageHash(player_new, 0, tokenURI_new, nonce);
    const signature_new = await accounts[0].signMessage(ethers.utils.arrayify(hash_new));
    await sp.connect(accounts[2]).createPassport(tokenURI_new, signature_new, nonce);
    expect(await sp.totalSupply()).to.equal(2);
    expect(await sp.tokenURI(idx_new)).to.equal(tokenURI_new);
    
    // test that only Gitcoin can mint these
    try{
        const signature_newest = await accounts[1].signMessage(ethers.utils.arrayify(hash_new));
        await sp.connect(accounts[2]).createPassport(tokenURI_new, signature_newest, nonce);
        expect(false).to.equal(true);
    } catch(e){
        expect(true).to.equal(true);
    }

    // validate passport can't be created twice with same player
    try{
        await sp.connect(accounts[2]).createPassport(tokenURI_new, signature_new, nonce);
        expect(false).to.equal(true);
    } catch(e){
        expect(true).to.equal(true);
    }

    // validate passport can't be transfered
    try{
        await sp.connect(accounts[0]).transferFrom(accounts[0].address, accounts[1].address, 0);
        expect(false).to.equal(true);
    } catch(e){
        expect(true).to.equal(true);
    }

    // validate passport can't be burned except by its owner
    try{
        await sp.connect(accounts[0]).burn(1);
        expect(false).to.equal(true);
    } catch(e){
        expect(true).to.equal(true);
    }

    // validate passport CAN be burned by its owner
    expect(await sp.balanceOf(accounts[1].address)).to.equal(1);
    await sp.connect(accounts[1]).burn(0);
    expect(await sp.balanceOf(accounts[1].address)).to.equal(0);


  });


});
