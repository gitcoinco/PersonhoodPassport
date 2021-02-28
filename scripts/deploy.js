async function main() {
  // We get the contract to deploy
  const SybilPassport = await ethers.getContractFactory("SybilPassport");
  const sp = await SybilPassport.deploy();

  console.log("SybilPassport deployed to:", sp.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
