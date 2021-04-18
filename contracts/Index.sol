//"SPDX-License-Identifier: UNLICENSED"

pragma solidity ^0.8.3;

contract Inbox {
    string public message;

    constructor(string memory initMessage) {
        message = initMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
