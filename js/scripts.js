// Business Logic

//Global Variables
var roman = ["I", "V", "X", "L", "C", "D", "M"];
var romanIndex = 0;
var romanNumeral = [];
var symbolString = "";

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
  if (0 < n && n < 4) {
    symbolString = concatenate(n);
    romanNumeral.unshift(symbolString);

  } else if (n === 4) {
    symbolString = (roman[romanIndex]) + (roman[romanIndex + 1]);
    romanNumeral.unshift(symbolString);

  } else if (5<= n && n < 9) {

    var remainder = n % 5;
    symbolString = (roman[romanIndex + 1]) + (concatenate(remainder));
    romanNumeral.unshift(symbolString);
    console.log(romanNumeral);

  } else if (n === 9) {

  } else if (n === NaN) {
    alert("Please enter a number");
  } else if (n < 0) {
    alert("Please enter a positive number");
  }

};

var iterator = function(num){

  var numInputArray = num.split("").reverse().map(Number);
  for ( i=0 ; i < numInputArray.length ; i++){
    converter(numInputArray[i]);
    romanIndex = i * 2;
  }
};




// User Interface Logic

$(function(){

  //Submit Button on Click
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("#userInput").val();
    iterator(userInput);

    $(".results").text(romanNumeral.join(""));
  });
});
