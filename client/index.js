var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x7406913ce0231F673eB0b108741DF667466E3b68";

//const newKittybtn = document.querySelector('.NewKitty')

$(document).ready(function(){
   window.ethereum.enable().then(function(accounts){
    instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})   
    user = accounts[0];

    console.log(instance);
   })
})


$( document ).ready(function() {
  $('#NewKitty').on('click', function() {
      instance.methods.createKittyGen0(getDna()).send({},function(error, txHash){
      if (error){
        console.log(err);
      }
      else {
        console.log(txHash);
      }
    });
  })
});