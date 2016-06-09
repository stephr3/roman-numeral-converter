// Business Logic

//Global Variables
var roman = ["I", "V", "X", "L", "C", "D", "M"];
var romanIndex = 0;
var result = [];

//Concatenates symbols
var concatenate = function (n) {
  var finalSymbol = "";
  for (i=0; i<n; i++ ) {
    finalSymbol += roman[romanIndex];
  }
  return finalSymbol;
};

// Converts iterated feedback to roman numbers
var converter = function(n){
  if (0 < n < 4) {

  } else if (n === 4) {

  } else if (5<= n < 9) {

  } else if (n === 9) {

  } else if (n === NaN) {
    alert("Please enter a number");
  } else if (n < 0) {
    alert("Please enter a positive number");
  }

};

var iterator = function(num){
  var userInputArray = userInput.split("").reverse().map(Number);
  for ( i=0 ; i < userInputArray.length ; i++){
    converter(userInputArray[i]);
    romanIndex += 2;
  }
};




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
