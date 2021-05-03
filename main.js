const Block = require('./block');
const BlockChain = require('./blockchain');

//let block = new Block(0, "Wow, almacena esto.", null);

//console.log(block);

const blockchain = new BlockChain("data del nuevo bitcoin");
blockchain.addBlock("data del segundo bloque");
blockchain.addBlock("data del tercero bloque");

console.log(blockchain);
