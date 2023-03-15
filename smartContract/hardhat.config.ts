import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/eF5ZSdI_QN11xi7VnLxT3LwpOYI4bM2B",
      accounts: [`0xf12968a9fbf37694f2265d1360fa7f9f06fba26181d4a0340a35c8ad9497e6e5`],
    },
  },
};
export default config;
