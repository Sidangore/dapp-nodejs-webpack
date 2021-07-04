const Registration = artifacts.require("Registration");
const truffleAssert = require('truffle-assertions');

contract("Registration", (accounts) => {
    let contract;
    const owner = accounts[0];
    const user = accounts[1];
    const notOwner = accounts[2];
    const unregistered = accounts[3];
    const name = 'Siddhant Angore';
    const age = 20;
    const value = 10;


    before("setup contract", async() => {
        contract = await Registration.deployed();
    });

    it("should register a new user", async() => {
        let result = await contract.registerUser(user, name, age, { from: owner });
        truffleAssert.eventEmitted(result, 'NewUser', (ev) => {
            return ev.userAddress == user && ev.userName == name && ev.userAge == age;
        });
    });

    it('should fail to register by non-owner', async() => {
        await truffleAssert.reverts(
            contract.registerUser(user, name, age, {
                from: notOwner,
            }),
        )
    });

    it("should send a random value", async() => {
        await contract.registerUser(user, name, age, { from: owner });
        let result = await contract.send(value, { from: user });
        truffleAssert.eventEmitted(result, 'NewValue', (ev) => {
            return ev.userAddress == user && ev.value == value;
        });
    });

    it('should fail to send value from un-registered user', async() => {
        await truffleAssert.reverts(
            contract.send(value, {
                from: unregistered,
            }),
        )
    });
});