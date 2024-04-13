module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
      gas: 6721975,
      from: "0x21c526D25D377e9dF33d4ebC35891FC83f3B8A87",
    },
  },
  contracts_directory: "./testing/",
  contracts_build_directory: "./src/build/",
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100,
        },
      },
    },
  },
};
