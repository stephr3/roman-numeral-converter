// Business Logic

//Global Variables
var roman = ["I", "V", "X", "L", "C", "D", "M"];
var romanIndex = 0;
var result = [];


var converter = function(num){
// console.log(userInputArray);
};

var iterator = function(num){
  var userInputArray = userInput.split("").reverse().map(Number);
  for ( i=0 ; i < userInputArray.length ; i++){
    
};




}



// User Interface Logic

$(function(){

  //Submit Button on Click
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("#userInput").val();

    var romanNumeral = iterator(userInput);
    $("#result").text(romanNumeral);
  });
});
