pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./Ownable.sol";

contract Kittycontract is IERC721, Ownable {

    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    string public constant name = "AlexKitties";
    string public constant symbol = "AKT";

 event Birth (
    address owner, 
    uint256 kittenId, 
    uint256 mumId, 
    uint256 dadId, 
    uint256 genes
 );

 struct Kitty{  
    uint256 genes;
    uint64 birthTime;
    uint32 mumId;
    uint32 dadId;
    uint16 generation;
 }

    Kitty[] kitties;
 mapping( address => uint256) ownershipTokenCount;
 mapping( uint256 => address) public kittyIndexToOwner;

 uint public gen0Counter;

    function createKittyGen0(uint256 _genes) public onlyOwner returns(uint256) {
        require(gen0Counter < CREATION_LIMIT_GEN0);
        gen0Counter++;

        return _createKitty(0, 0, 0, _genes, msg.sender);
    }

    function _createKitty(
        uint256 _mumId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256) {
        Kitty memory _kitty = Kitty({
            genes: _genes,
            birthTime: uint64(now),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });

        uint256 newKittenId = kitties.push(_kitty) - 1;
        
        emit Birth(_owner, newKittenId, _mumId, _dadId, _genes);

        _transfer(address(0), _owner, newKittenId);

        return newKittenId;
    }

    function getKitty (uint256 tokenId) external returns (
        uint256 genes, 
        uint256 birthTime,
        uint256 mumId, 
        uint256 dadId, 
        uint256 generation)
        {
        Kitty storage kitty = kitties[tokenId];//pointer

        birthTime = uint256(kitty.birthTime);
        mumId = uint256(kitty.mumId);
        dadId = uint256(kitty.dadId);
        generation = uint256(kitty.generation);
        genes = kitty.genes;

        //return (
          //  Kitty[tokenId].genes, 
           // Kitty[tokenId].birthTime, 
           // Kitty[tokenId].mumId, 
           // Kitty[tokenId].dadId, 
           // Kitty[tokenId].generation);
    }

    function balanceOf (address owner) external view returns (uint256 balance){
        return ownershipTokenCount[owner];
    }

    function totalSupply() public view returns (uint256 total){
        return kitties.length;
    }
    
    function ownerOf(uint256 tokenId) external view returns (address owner){
        require ( tokenId != 0 );
        return kittyIndexToOwner[tokenId];
    }

    function transfer(address to, uint256 tokenId) external{
        require (to != address(0), "cannot be your own address");
        require (to != address(this), "cannot be the contract address");
        require (kittyIndexToOwner[tokenId] == msg.sender, "You don't own the contract");
        
        _transfer (msg.sender, to, tokenId);
    }

    function _transfer (address from ,address to, uint256 tokenId) internal{
        ownershipTokenCount[to] ++;
        kittyIndexToOwner[tokenId] = to;

        if (from != address(0)){
           ownershipTokenCount[from] --;
        }
        
        emit Transfer(from, to, tokenId);
    }
}