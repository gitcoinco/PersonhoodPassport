async function main() {
  // We get the contract to deploy
  const PersonhoodPassport = await ethers.getContractFactory("PersonhoodPassport");
  const sp = await PersonhoodPassport.deploy();

  console.log("PersonhoodPassport deployed to:", sp.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
