var AtlasToken = artifacts.require("./AtlasToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(AtlasToken);
};
