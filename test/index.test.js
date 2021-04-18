const Web3 = require('web3');
const ganache = require('ganache-cli');
const assert = require('assert');
const { abi, evm } = require('../compile');

const web3 = new Web3(ganache.provider());

describe('Inbox', () => {
  let acc;
  let contract;

  beforeEach(async () => {
    acc = await web3.eth.getAccounts();

    contract = await new web3.eth.Contract(abi)
      .deploy({
        data: evm.bytecode.object,
        arguments: ['hi there'],
      })
      .send({ from: acc[0], gas: 500000 });
  });

  it('should deploy a contract', () => {
    assert.ok(contract.options.address);
  });

  it('should have a default message', async () => {
    const message = await contract.methods.message().call();
    assert.strictEqual(message, 'hi there');
  });

  it('should change the message', async () => {
    await contract.methods.setMessage('bye there').send({ from: acc[0] });
    const message = await contract.methods.message().call();

    assert.strictEqual(message, 'bye there');
  });
});
