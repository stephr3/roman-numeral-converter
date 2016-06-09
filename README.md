# _Roman Numerals Converter_

#### _An app to convert numbers to roman numerals, June 9, 2016_

#### By _**Stephanie Gurung and Julia Dickey**_

## Description

_The app takes user input of a number between 0 and 4000, then displays the number converted into roman numerals._

## Setup/Installation Requirements

* _Clone the github repository._
* _Open index.html in the browser of your choice._
* _Enter a number between 0 and 4000._
* _Click the submit button._

## Specifications

**The list of Roman Numerals is [ I, V, X, L, C, D, M ]**


* For the ones' place, for the value "n"
  if 0 < n < 4  
  n = (the current symbol) listed n times (example, if n=3, the roman numeral would be
  "III")
  [ **I**, V, X, L, C, D, M ]

  if n = 4
  n = (the current symbol) + (the next symbol)
  For example, when n=4, the roman numeral would be IV
  [ **I**, _V_, X, L, C, D, M ]

  if 5 <= n < 9
  n = (the next symbol) + (current symbol) listed (n % 5) times
  [ **I**, _V_, X, L, C, D, M ]

  if n=9
  n = (the current symbol) + (the symbol after next)
  [ **I**, V , _X_, L, C, D, M ]

## (The same rules apply for each place, but the symbols we start with with shift two to the right each time)

* If the user enters a non-number or a number with a comma, an alert will say "Please enter a valid number without commas or any other symbol."
  example input: $%^&*
  example output: "Please enter a valid number."

* If the number is not greater than 0 and less than 4000, an alert will say "Please enter a number greater than 0 and less than 4000."
  example input: 567,803
  example output: "please enter a number"

## Known Bugs

_Please let us know if you find any bugs!_

## Support and contact details

_Please contact us through our git hub accounts._

## Technologies Used

_HTML, CSS, Bootstrap, JavaScript, jQuery_

Copyright (c) 2016 **_Stephanie Gurung and Julia Dickey_**
