import { ethers, upgrades } from "hardhat";


async function main() {
    const ActulizedVersion = await ethers.getContractFactory("MyNFT")
    const res = await upgrades.upgradeProxy("0x8A59Aec349eBBa0B0B7656226B3aBC2ae6C8fe1A", ActulizedVersion)
    console.log(res)

}

main()
