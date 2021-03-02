async function main() {
  // We get the contract to deploy
  const GitcoinPassport = await ethers.getContractFactory("GitcoinPassport");
  const sp = await GitcoinPassport.deploy();

  console.log("GitcoinPassport deployed to:", sp.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
