// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Registration {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    struct User {
        string name;
        uint8 age;
        bool registered;
    }

    event NewUser(address userAddress, string userName, uint8 userAge);
    event NewValue(address userAddress, uint256 value);

    mapping(address => User) public users;

    modifier onlyOwner {
        require(msg.sender == owner, "Only Owner can register a new user.");
        _;
    }

    function registerUser(
        address _address,
        string memory _name,
        uint8 _age
    ) public onlyOwner {
        users[_address] = User(_name, _age, true);
        emit NewUser(_address, _name, _age);
    }

    function send(uint256 _value) public {
        require(
            users[msg.sender].registered == true,
            "The user is not registered to send value."
        );
        emit NewValue(msg.sender, _value);
    }
}
