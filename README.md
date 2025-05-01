# CashRegisterApp

Register Change Calculator
FreeCodeCamp: JavaScript Algorithms and Data Structures Certification - Project 4

Description:
This project is a Cash Register simulator that calculates the amount of change given based on a set price and the amount of money given. It also calculates how to form the change out of the available currency in the register drawer. It creates the formation of change by using the highest value available currency first as much as possible and itterates down in value until the ammount of change has been reached. 
The program is built using HTML, CSS, and JavaScript. It's part of the JavaScript Algorithms and Data Structures Certification on freeCodeCamp.org.
The only thing provided from freeCodeCamp.org was a set of Instructions, the file names, and code for the initial price and drawer currency ammount. The code given is outlined in the script.js file. 

Project Files:
index.html
styles.css
script.js
project4Instructions.png
project_4_checks.png

How it Works:
1. Enter a value into the input or type using the number pad.
2. Click the "=" Button or hit Enter on your keyboard
3. The algorithm will display to the user whether it is possible to form the calculated change for the given amount as well as how the change should be formed.

Note: 
The Algorithm forms the change by utilizing as many highest value tender first either without going over or while there is still quantities of that tender in the cash register drawer. It will then try the next highest tender and repeat until the ammount of change is met. For example, the program will try to use as many $100 dollar bills as possible. If change is still needed after that, it will proceed to try and use as many $20 dollar bills as possible. This process will repeat all the way down to pennies or until the amount of change has been met. 

Technologies:
1. HTML5
2. CSS3
3. JavaScript(ES6)