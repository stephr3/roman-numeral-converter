# _Roman Numerals Converter_

#### _{Brief description of application}, {Date of current version}_

#### By _**Stephanie Gurung and Julia Dickey**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

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
  [ **I**, V, X, L, C, D, M ]

  if n=9
  n = (the current symbol) + (the symbol after next)
  [ **I**, V , _X_, L, C, D, M ]

(The same rules apply for each place, but the symbols we start with with shift two to the right each time)

* For the tens' place, for the value "n"
  if 0 < n < 4  
  n = **X** listed n times (example, if n=3, the roman numeral would be
  "XXX")
  [ I, V, **X**, L, C, D, M ]

  if n = 4
  n = (the current value on the list) + (the next value on the list)
  For example, when n=4, the roman numeral would be **XL**
  [ I, V, **X**, _L_, C, D, M ]

  if 5 <= n < 9
  n = L + (previous symbol) listed (n % 5) times
  [ I, V, X, **L**, C, D, M ]

  if n=9
  n = (the previous value on the list) + (the next value on the list)
  [ I, V , _X_, **L**, _C_, D, M ]

* For the hundreds' place, for the value "n"
  if 0 < n < 4  
  n = **C** listed n times (example, if n=3, the roman numeral would be
  "XXX")
  [ I, V, X, L, **C**, D, M ]

  if n = 4
  n = (the current value on the list) + (the next value on the list)
  For example, when n=4, the roman numeral would be **CD**
  [ I, V, X, L, **C**, _D_, M ]

  if 5 <= n < 9
  n = D + (previous symbol) listed (n % 5) times
  [ I, V, X, L, C, **D**, M ]

  if n=9
  n = (the previous value on the list) + (the next value on the list)
  [ I, V , X, L, _C_, **D**, _M_ ]

* For the thousands' place, for the value "n"
  if 0 < n < 4  
  n = **M** listed n times (example, if n=3, the roman numeral would be
  "XXX")
  [ I, V, X, L, C, D, **M** ]

* If the user enters a non-number, an alert will say "Please enter a number."
  example input: $%^&*
  example output: "please enter a number"

* The converter will only convert numbers less than 4000. If the number is larger, an alert will say     "Please enter a value less than 4000."
  example input: 567,803
  example output: "please enter a number"

* If the user enters a number that is less than 1, an alert will say "Please enter a positive number."
  example input: -78
  example output: "please enter a positive number"

* The program will convert numbers including commas.


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
