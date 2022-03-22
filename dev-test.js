const Block = require ("./block");

// const block = new Block("time1","hash1","hash2","data");

// console.log(block.toString());
console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(),["data1","data2"]);
console.log(testBlock.toString());