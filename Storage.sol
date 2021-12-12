//practice w/ solidity 

pragma solidity >=0.6.0 <0.9.0;

contract SimpleStorage {

        uint256 favoriteNumber;

    // This is a comment!
    struct People {
        uint256 favoriteNumber;
        string name;
    }

       People[] public people;
    mapping(string => uint256) public nameToFavoriteNumber;
}
