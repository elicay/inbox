const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Index.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

var input = {
  language: 'Solidity',
  sources: {
    'Index.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Index.sol'
].Inbox;
