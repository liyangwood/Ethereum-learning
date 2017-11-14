// var Migrations = artifacts.require("./Migrations.sol");
var Test01 = artifacts.require('./Test01.sol');

module.exports = function(deployer) {
  // deployer.deploy(Migrations);
  deployer.deploy(Test01);
};
