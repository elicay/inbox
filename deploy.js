const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider();

const web3 = new Web3(provider);

const deploy = async () => {
  const acc = await web3.eth.getAccounts();

  const result = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: ['Hello there!!!'],
    })
    .send({ gas: '1000000', from: acc[0] });

  console.log(result.options.address);
};

deploy();
