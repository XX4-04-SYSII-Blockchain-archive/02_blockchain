// Imports
const Block = require ("./block");
const Blockchain = require("./blockchain");


/***  Test der Block-Funktionalität  */
// const block = new Block("time1","hash1","hash2","data");
// console.log(block.toString());
// console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),["data1","data2"]);
// console.log(testBlock.toString());

/***  Test der BlockChin-Funktionalität  */

const chain = new Blockchain();
console.log(chain);

chain.addBlock("daten von Block 1");
console.log(chain);

chain.addBlock("daten von Block 2");
console.log(chain);

chain.addBlock("daten von Block 3");
console.log(chain);

chain.addBlock("daten von Block 4");
console.log(chain);

// etc..
