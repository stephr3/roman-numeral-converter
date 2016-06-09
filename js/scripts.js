// Business Logic

//Global Variables
var roman = ["I", "V", "X", "L", "C", "D", "M"];
var romanIndex;
var romanNumeral = [];
var symbolString = "";

//Iterates through each number in user input (reversed)
var iterator = function(num){
  var numInputArray = num.split("").reverse().map(Number);
  for ( i=0 ; i < numInputArray.length ; i++){
    converter(numInputArray[i]);
  }
};

// Converts iterated feedback to roman numbers
var converter = function(n){
    romanIndex = i*2;
    if (n < 0) {
    alert("Please enter a number greater than zero");
    } else if (0 < n && n < 4) {
      symbolString = concatenate(n);
      romanNumeral.unshift(symbolString);

    } else if (n === 4) {
      symbolString = (roman[romanIndex]) + (roman[romanIndex + 1]);
      romanNumeral.unshift(symbolString);

    } else if (5<= n && n < 9) {
      var remainder = n % 5;
      symbolString = (roman[romanIndex + 1]) + (concatenate(remainder));
      romanNumeral.unshift(symbolString);

    } else if (n === 9) {
      symbolString = (roman[romanIndex]) + (roman[romanIndex + 2]);
      romanNumeral.unshift(symbolString);
    }
};

//Concatenates symbols
var concatenate = function (n) {
  var finalSymbol = "";
  for (j=0; j<n; j++ ) {
    finalSymbol += roman[romanIndex];
  }
  return finalSymbol;
};


// User Interface Logic
$(function(){
  //Submit Button on Click
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    iterator(userInput);
    $(".results").text(romanNumeral.join(""));
    romanNumeral = [];
  });
});
