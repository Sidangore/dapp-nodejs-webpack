const Provider = require('./Provider.js');
const provider = new Provider();
const { ADDRESS, ABI } = require('./Metadata.js');

class Contract {
    constructor() {
        this.web3 = provider.web3
    }

    initContract() {
        const instance = new this.web3.eth.Contract(ABI, ADDRESS);
        return instance;
    }
}

module.exports = Contract;