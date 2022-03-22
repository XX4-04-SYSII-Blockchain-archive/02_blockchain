class Block{

    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    // Ausgabe als String 
    toString(){
       return `Block -
       Timestamp:   ${this.timestamp}
       Last Hash:   ${this.lastHash.substring(0,10)}
       Hash:        ${this.hash.substring(0,10)}
       Data         ${this.data}`; 
    }
    
    static genesis(){
        return new this("Genesis time", "-----","abcd1234",[]);
    }



}

module.exports = Block;
