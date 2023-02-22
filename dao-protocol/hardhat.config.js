/* global ethers task */
//require('@nomiclabs/hardhat-waffle');
require("dotenv").config();
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: { enabled: true, runs: 200 },
  },

  // npx hardhat run scripts/deploy.js --network mumbai
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/1yHVzG9cEm8g0IJKQA0VO-nczdGW4NgO",
      accounts: [
        "0x5cc57113b52c046972de032b77186b16e533f66b269ba078fa98db58589a49aa",
      ],
    },
  },

  abiExporter: [
    {
      path: "./abi",
      pretty: false,
      flat: true,
      runOnCompile: true,
      //	only: ["NFTMarketplace", "RoyaltyToken"]
    },
  ],
};
