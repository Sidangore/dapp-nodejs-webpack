const Contract = require('./Contract.js');
const Provider = require('./Provider.js');
const provider = new Provider();
const contract = new Contract();
const web3 = provider.web3;
const instance = contract.initContract();

class Registration {
    async registerUser() {
        let accounts = await web3.eth.getAccounts();
        instance.methods.registerUser(accounts[1], 'Sid Ang', 20).send({ from: accounts[0] }).then(receipt => console.log(receipt.transactionHash));
    }

    async send() {
        let accounts = await web3.eth.getAccounts();
        instance.methods.send(10).send({ from: accounts[1] }).then(receipt => console.log(receipt.transactionHash));
    }

    sendDataInterval() {
        setInterval(this.send, 30);
    }
}

module.exports = Registration;