import { ethers, upgrades } from "hardhat";

async function main() {
  const MyNFT = await ethers.getContractFactory("MyToken");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
  // const myProxyContract = await upgrades.deployProxy(MyNFT, { kind: 'uups' })
  // console.log("Proxy deployed to address:", myProxyContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
