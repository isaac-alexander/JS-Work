function minuteToSeconds(minutes) { //parameter is minutes
    const secondsPerMinute = 60;
    console.log("There are " + minutes * secondsPerMinute + " seconds in " + minutes + " minutes"); // statements
}



minuteToSeconds(15) // argument is 15
minuteToSeconds(66) // argument is 66
minuteToSeconds(5) // argument is 5


// // Write a JavaScript function to calculate the area of a triangle where three sides are 5, 6, 7.

function calculateArea(sideA, sideB, sideC) {
    const semiPerimeter = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    return area
}
const area = calculateArea(5, 6, 7);
console.log("The area of the triangle is:", area); //The area of the triangle is: 14.696938456699069

////////////////////////////////////////////////////////////////
// // Write a JavaScript function to calculate multiplication and division of two numbers.


function calculateOperations(num1, num2) { //parameters are num1 and num2
    const multiplication = num1 * num2;
    const division = num1 / num2;              //statements
    console.log(multiplication); //1760
    console.log(division); //0.22727272727272727

}

calculateOperations(20, 88); //arguments are 20 and 88


//////////////////////////////////////////////////////////////////////

// Write a JavaScript program to convert temperatures to Celsius from Fahrenheit.


function celsiusToFahrenheit(celsius) {
    const Fahrenheit = (celsius * 1.8) + 32;
    return Fahrenheit;
}

const degree = celsiusToFahrenheit(26);
console.log("26 degree fahrenheit is equal to " + degree + " celsius"); //26 degree fahrenheit is equal to 78.80000000000001 celsius

//The function celsiusToFahrenheit(celsius) is defined to convert a temperature from Celsius to Fahrenheit.

//Inside the function, the formula (celsius * 1.8) + 32 is used to convert the Celsius temperature to Fahrenheit.
//The function returns the calculated Fahrenheit value.

//The function celsiusToFahrenheit is called with the argument 26, which means we are converting 26 degrees Celsius to Fahrenheit.

//The result of the function call is stored in the variable degree.

//The console.log statement prints the result to the console.

//////////////////////////////////////////////////////////////////////
// Write a JavaScript program to convert temperatures to Fahrenheit from Celsius, .


function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 0.5555555556;
    return celsius;
}

const degree$ = fahrenheitToCelsius(79);
console.log("79 degree celsius is equal to " + degree$ + " fahrenheit"); //79 degree celsius is equal to 26.1111111132 fahrenheit  

//The function fahrenheitToCelsius(fahrenheit) is defined to convert a temperature from Fahrenheit to Celsius.

//Inside the function, the formula (fahrenheit - 32) * 0.5555555556 is used to convert the Fahrenheit temperature to Celsius. 
//The function returns the calculated Celsius value.

//The function fahrenheitToCelsius is called with the argument 79, which means we are converting 79 degrees Fahrenheit to Celsius.

//The result of the function call is stored in the variable degree$.

//The console.log statement prints the result to the console.

////////////////////////////////////////////////////////////////////
// Write a JavaScript program to get the difference between a given number and 123.

function getDifference(number) {
    const givenNumber = 123;
    console.log(number - givenNumber);

}

getDifference(150); //27
///////////////////////////////////////////////////////////////////////

// Write a JavaScript function to get the square of a given number.

function getSquare(number) {  //number is = 5, number is 10
    const exponentiation = number ** 2; // 5 raise to power 2, exp = 25, 100
    console.log(exponentiation); // 25 , 100

}
getSquare(5); //25
getSquare(10); //100


function getSquare2(number) {  //number is = 5, number is 410
    const exponentiation = Math.pow(number, 2); // 5 raise to power 2, exp = 25, 168100
    console.log(exponentiation); // 25 , 168100

}
getSquare2(5); //25
getSquare2(410); //168100
// Write a JavaScript function to get the square root of a given number.


function getSquareRoot(number) {
    const squareRoot = Math.sqrt(number)
    console.log(squareRoot);

}

getSquareRoot(16)
getSquareRoot(25)

function getSquareRoot1(number) {
    const squareRoot = Math.sqrt(number);
    return squareRoot;
}

const result$ = getSquareRoot1(16);
console.log(result$);


//defines a function named getSquareRoot that takes one parameter called number.

//inside the function, a constant variable named squareRoot is declared and assigned the value of the square root of the number parameter using the Math.sqrt() method.

//the function returns the value of the squareRoot variable.

//  closes the function definition.

//outside the function, a variable named result$ is declared and assigned the value returned by calling the getSquareRoot function with the argument 16.

//logs the value of the result$ variable to the console, which will output 4 since the square root of 16 is 4.



//////////////////////////////////////////////////////////////
// Write a JavaScript function to get the cube of a given number.

function getCube(number) {  //number is = 5, number is 4 , number is 3
    const exponentiation = Math.pow(number, 3); // raise to power 3, exp = 125, 64 , 27
    console.log(exponentiation); // 125 , 64 , 27

}
getCube(5); //125
getCube(4); //64
getCube(3); //27 

//////////////////////////////////////////////////////////////////////////
// Create a function that takes a number as an argument, 
// increments the number by 1 
// and returns the result.
// addition(0) ➞ 1


function addition(number) {
    const increment = number + 1;
    return increment;
}
const result = addition(0);
console.log(result); //1

//////////////////////////////////////////////////////////////////////
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points
// Examples
// footballPoints(3, 4, 2) ➞ 13
// footballPoints(5, 0, 2) ➞ 15
// footballPoints(0, 0, 1) ➞ 0


function footballPoints(wins, draws, losses) {
    const pointsFromWins = wins * 3;
    const pointsFromDraws = draws * 1;
    const pointsFromLosses = losses * 0;
    return pointsFromWins + pointsFromDraws + pointsFromLosses;
}

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));

//the function footballPoints(wins, draws, losses) is defined to calculate the total points a football team has obtained based on the number of wins, draws, and losses.

//inside the function the variable pointsFromWins is assigned the value of wins * 3.

//the variable pointsFromDraws is assigned the value of draws * 1.

//the variable pointsFromLosses is assigned the value of losses * 0. 

//the function returns the sum of pointsFromWins, pointsFromDraws, and pointsFromLosses. This gives the total points the team has obtained.

//The function is called in the last line with the value of wins draws and losses

////////////////////////////////////////////////////////////////////////

//Create a function that takes three numbers as arguments and returns their sum.

function sumThreeNumbers(a, b, c) {
    const addition = a + b + c
    return addition
}
const sum = sumThreeNumbers(20, 40, 3)
console.log(sum);

//The function sumThreeNumbers(a, b, c) is defined to take three arguments: a, b, and c.

//Inside the function, a variable named addition is declared and assigned the value of a + b + c. This calculates the sum of the three numbers.

//The function returns the value of the addition variable.

//The function sumThreeNumbers is called with the arguments 20, 40, and 3.

//The result of the function call is stored in the variable sum.

//The console.log(sum) statement prints the value of sum to the console.



//////////////////////////////////////////////////////////////////
//The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Write a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.


// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

function fiftyThirtyTwenty(afterTaxIncome) {
    const needs = afterTaxIncome * 50 / 100;
    const wants = afterTaxIncome * 30 / 100;
    const savings = afterTaxIncome * 20 / 100;

    return {
        Needs: needs,
        Wants: wants,
        Savings: savings
    };
}

console.log(fiftyThirtyTwenty(50000)); // { Needs: 25000, Wants: 15000, Savings: 10000 }
console.log(fiftyThirtyTwenty(13450)); // { Needs: 6725, Wants: 4035, Savings: 2690 }



//a function named fiftyThirtyTwenty that takes one parameter afterTaxIncome

//inside the function we calculate the amount allocated for needs, wants and savings by multiplying afterTaxIncome by 0.50 (50%), 0.30 (30%) and 0.20 (20%)

//We construct an object containing the calculated values for needs, wants, and savings. This object is then returned by the function.

//The function is called in the last line with the value needs wants and savings


/////////////////////////////////////////////////////////////////////
//write a function that returns todays date.

function getTodaysDate() {
    const d = new Date();

    const day = String(d.getDate()).padStart(2, "0");

    const month = String(d.getMonth() + 1).padStart(2, "0");

    const year = d.getFullYear();

    return currentDate = day + "/" + month + "/" + year;
    return d;
}
console.log(getTodaysDate());



///////////////////////////////////////////////////////////////////
// write a function that accepts an object with a name, age and occupation and returns a new object with the name, age and year of birth.

function details(person) {
    console.log("My name is " + person.name + "," + "I'm a " + person.occupation + ". I am " + person.age + " years old");

}

details({
    name: "John",
    age: 30,
    occupation: "teacher"
});


function createYearOfBirth(person) {
    const currentYear = new Date().getFullYear();
    const yearOfBirth = currentYear - person.age;

    return {
        name: person.name,
        age: person.age,
        yearOfBirth: yearOfBirth
    };
}

const person =
    ({
        name: "John",
        age: 30,
        occupation: "Teacher"
    });
const newPerson = createYearOfBirth(person);
console.log(newPerson);

// Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// isString('w3resource'); -> true
// // isString(22); -> false



function isString(input) {
    return typeof input === `string`;
}
console.log(isString('w3resource'));
console.log(isString(22));


//////////////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// isBlank(''); -> true
// isBlank('abc'); -> false


function isBlank(string) {
    return string === "";
}
const result1 = isBlank('')
const result2 = isBlank('abc');

console.log(result1);
console.log(result2);


////////////////////////////////////////////////////////////////////////
// Write a JavaScript function that takes a number and converts it to a string 
// Test Data :
// convertToString(12); -> "12"
// convertToString(5); -> "5"

function convertToString(number) {
    return number.toString();
}

console.log(convertToString(12)); // -> "12"
console.log(convertToString(5)); // -> "5"


function convertToString(number) {
    const numb = number
    const str = numb.toString();
    return str
}

console.log(convertToString(12)); // -> "12"
console.log(convertToString(5)); // -> "5"


// Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// stringToArray("Alex Code"); -> ["Alex", "Code"]


function stringToArray(string) {
    const text = string;
    return text.split(" ");
}

console.log(stringToArray("Alex Code"));


// let text = "ab ef";
// const myArray = text.split(" ");
// console.log(myArray); //a


// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// truncateString("Alex Code", 3);  -> "Ale"

function extractCharacter(string) {
    const text = string;
    return text.substr(0, 3);
}
console.log(extractCharacter("Alex Code", 3));


/////////////////////////////////////////////////////////////////////

// Write a JavaScript function to parameterize a string.
// Test Data :
// stringParameterize("Alex Code from USA."); -> "Alex-Code-from-USA."

function stringParameterize(str) {
    return str.replaceAll(/ /g, '-');
}

console.log(stringParameterize("Alex Code from USA."));






////////////////////////////////////////////////////////////////////////

// Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// capitalize('js string exercises'); -> "Js string exercises"


function capitalize(string) {
    const text = string
    return text.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalize('js string exercises'));

//////////////////////////////////////////////////////////////////
// Write a JavaScript function to concatenate a given string n times.
// Test Data :
// repeat('Ha!', 2); -> "Ha!Ha!"
// repeat('Ha!', 3); -> "Ha!Ha!Ha!"

function repeat(string, number) {
    return string.repeat(number);
}
console.log(repeat('Ha!', 2));
console.log(repeat('Ha!', 3));


////////////////////////////////////////////////////////////////////
// Write a JavaScript function to strip leading and trailing spaces from a string.
// Test Data :
// strip('     hello world    '); -> "hello world"
// strip(' w3resource '); -> "w3resource"

function strip(str) {
    return str.trim();
}

console.log(strip(' hello world '));
console.log(strip(' w3resource '));

///////////////////////////////////////////////////////////////////////////
//Write a JavaScript function that returns the character at a specified index (position) in a string:
//Test Data :
//charIndex('Hello World', 6); -> "W"
//charIndex('Alex', 2); -> "e"

function charIndex(string, number) {
    return string.charAt(number)
}
console.log(charIndex('Hello World', 6));
console.log(charIndex('Alex', 2));

/////////////////////////////////////////////////////////////////////////
//Write a JavaScript function that returns true if a string contains a specified value.
//Test Data :
//containsString('Hello World', "World"); -> true
//containsString('Alex Code', "java"); -> false

function containsString(string, value) {
    return string.includes(value)
}
console.log(containsString('Hello World', "World"));
console.log(containsString('Alex Code', "java"));



//////////////////////////////////////////////////////////////////////
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
// toNumberArray(["91", "44"]) ➞ [91, 44]

//Using the .map method
//Step 1: Create a function with the function name toNumberArray taking one parameter(string), and takes an argument
//step 2: Inside the function, it uses the map method to iterate over each element in the string array and apply the Number function to convert each string element to a number.
//step 3: The toNumberArray function is called with the array ["9.4", "4.2"] as an argument.

function toNumberArray(string) {
    return string.map(Number);
}
console.log(toNumberArray(["9.4", "4.2"])); //[ 9.4, 4.2 ]
console.log(toNumberArray(["91", "44"])); //[ 91, 44 ]


//using the for loop method
//Step 1: Create a function with the function name toNumberArray taking one parameter(arrayOfString), and takes an argument
//Step 2: Creates an empty array called arrayOfNumbers. It will be used to store the converted numbers.
//Step 3: Create a for loop which will iterate over each element in the arrayOfString array.
//Step 4: Inside the for loop convert the element at arrayOfString[index] to a number using the Number function. It then pushes (adds) the converted number to the arrayOfNumbers array and ends the loop
//Step 5: Return the arrayOfNumbers array which now contains all the new numbers.

function toNumberArray(arrayOfString) {
    const arrayOfNumbers = [];
    for (let index = 0; index < arrayOfString.length; index++) {
        arrayOfNumbers.push(Number(arrayOfString[index]))
    }
    return arrayOfNumbers;

}
console.log('arrayOfNumbers', toNumberArray(["9.4", "4.2"]));

function toNumberArray(arrayOfString) {
    const arrayOfNumbers = [];
    for (const item of arrayOfString) {
        arrayOfNumbers.push(Number(item))
    }
    return arrayOfNumbers;

}
console.log('arrayOfNumbers', toNumberArray(["9.4", "4.2"]));




/////////////////////////////////////////////////////////////////////////
// Create a function that takes an array of numbers or letters and returns a string.
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

//Using .join method
//Step 1: Create a function with the function name arrayToString taking one parameter(input), and takes an argument
//step 2: Inside the function, it uses the join method to concatenate each elements of the array into a single string.
//step 3: console.log(arrayToString([1, 2, 3, 4, 5, 6]));.

function arrayToString(input) {
    return input.join("");
}
console.log(arrayToString([1, 2, 3, 4, 5, 6])); //123456
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //abcdef


//The for loop method
//Step 1: create a function that takes on parameter
//Step 2: create an empty string 
//Step 3: create a for loop to loop through the array 
//Step 4: concatenate elements of the array index to empty string (add and assign) and end the loop
//Step 5: return string

function arrayToString(array) {
    let nString = ""
    for (let index = 0; index < array.length; index++) {
        nString += array[index]
    }
    return nString
}
console.log(arrayToString([1, 2, 3, 4, 5, 6])); //123456  //call the function with the argument and log it to the terminal
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //abcdef

/////////////////////////////////////////////////////////////
// Given two arguments, return an array which contains these two arguments.
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]

//Step 1:Declare a function named makePair that takes two parameter and two arguments, num1 and num2
//Step 2: Inside the function create an array with the two arguments num1 and num2 and returns it. End the function
//Step 3: console.log(makePair(1, 2));   - [1, 2]


function makePair(num1, num2) {
    return [num1, num2];
}

console.log(makePair(1, 2)); //[1, 2]
console.log(makePair(51, 21)); //[51, 21]

//////////////////////////////////////////////////////////////////////

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const myColor = ["Red", "Green", "White", "Black"];

const joinedWithCommas = myColor.join(',');
console.log(joinedWithCommas); // ➞ "Red,Green,White,Black"

const joinedWithPlus = myColor.join('+');
console.log(joinedWithPlus); // ➞ "Red+Green+White+Black"


//Using the for loop and if else statement 
//Step 1: create empty string
//Step 2: create a for loop to loop through the array
// Step 3: in the body of your for loop create an if-else statement that concatenate if its an empty string  else concatenate if the string not empty add a comma (,) then ends the loop
// Step 4: console.log(joinedString);


let joinedString = "";
let seperator = "+"

for (let index = 0; index < myColor.length; index++) {
    if (joinedString == "") {
        joinedString += myColor[index];
    } else {
        joinedString += seperator + myColor[index]
    }
}
console.log(joinedString);



//////////////////////////////////////////////////////////////////////

// Write a JavaScript program to compute the sum and product of an array of integers.
// input: [2,4,6,8]
// output: sum is 20

// Step 1: Declare a constant array named input that contains four elements: 2, 4, 6, and 8.
// Step 2: Initialize an empty variable
// Step 3: Create a for loop that adds the element at input[index] to the current value of sum1.
// Step 4: console.log(sum1);

const input = [2, 4, 6, 8];
let sum1 = 0;

for (let index = 0; index < input.length; index++) {
    sum1 += input[index];

}
console.log(sum1);

///////////////////////////////////////////////////////////////////////
//   JavaScript function to create a specified number of elements with a pre-filled numeric value array.
//   array_filled(6, 0) => [0, 0, 0, 0, 0, 0]
//   array_filled(4, 11) =>  [11, 11, 11, 11]

// Step 1: Create a function named array_filled that takes two parameter and arguments
// Step 2: Create an empty array
// Step 3: Create a for loop that iterate length times 
// Step 4: Use the .push method to push into the empty array and end the loop
// Step 5: return the new array
// Step 6: console.log(array_filled(6, 0));


function array_filled(length, value) {
    const nArray = []
    for (index = 0; index < length; index++) {
        nArray.push(value)
    }
    return nArray
}
console.log(array_filled(6, 0));
console.log(array_filled(4, 11));

/////////////////////////////////////////////////////////////////////
// Write a function that converts an object into an array of keys and values.
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// Step 1: Create a function
// Step 2: Create an empty array in your function 
// Step 3: Loop through the object using the for-in method 
// Step 4: Use the .push method to pass the key and obj[key] to the empty array

function objectToArray(obj) {
    let arr = [];

    for (let key in obj) {
        arr.push([key, obj[key]]);
    }
    return arr
}
console.log(objectToArray({ D: 1, B: 2, C: 3 }));


///////////////////////////////////////////////////////////////////////

// Create the function that takes an array with objects and returns the sum of people's budgets.
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// Task 1
// input 
// const staffsDetails = [
//   { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
//   { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
//   { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
//   { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
// ];

// output 
// "I am Jam Josh a staff of Royal Suites."
// "I am Justina Kap a staff of Royal Suites."
// "I am Chris Colt a staff of Royal Suites."
// "I am Jane Doe a staff of Royal Suites."

// output 2 
// "index 0 : I am Jam Josh a staff of Royal Suites."
// "index 1 : I am Justina Kap a staff of Royal Suites."
// "index 2 : I am Chris Colt a staff of Royal Suites."
// "index 3 : I am Jane Doe a staff of Royal Suites."

// calculate and print the total salaries for all staff: output "NGN 900"
// Step 1: Declares an array of objects, each containing properties name, age, and budget.
// Step 2: Create a function taking one parameter
// Step 3 : Create an empty variable to store the tootal Budget
// Step 4: Use the foor loop method to loop through the array and increment till it reaches the length of the array
// Step 5: Inside the loop, add the budget property of the current object (arr[i]) to totalBudget. and end the loop
// Step 6: return totalBudget and close the function
// Step 7: Call the getBudgets function with the budgets array and print the result to the console


const budgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];


function getBudgets(arr) {
    let totalBudget = 0;
    for (let i = 0; i < arr.length; i++) {
        totalBudget += arr[i].budget;
    }
    return totalBudget;
}

console.log(getBudgets(budgets)); // Output: 65700

// Step 1: Declare a variable staffsDetails and initialize it with an array containing objects with properties name, age, salary, and currency.
// Step 2: Create a for loop that iterates over each element in the staffsDetails array.
// Step 3: Inside the loop, concatinate strings to the staffsDetails[i].name into the console to introduce each staff member.
// Step 4:  Starts another for loop that iterates over each element in the staffsDetails array. Inside this loop, concatinate strings to the index and staffsDetails[i].name to introduce each staff member along with their index in the array.


let staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

for (let i = 0; i < staffsDetails.length; i++) {
    console.log("I am " + staffsDetails[i].name + " a staff of Royal Suites.");
}

for (let i = 0; i < staffsDetails.length; i++) {
    console.log("index " + i + " : I am " + staffsDetails[i].name + " a staff of Royal Suites.");
}

// Calculate the total salaries using a for loop
const exchangeRate = 780; // Assume 1 USD = 780 NGN
let totalSalariesUSD = 0;

for (let i = 0; i < staffsDetails.length; i++) {
    totalSalariesUSD += staffsDetails[i].salary;
}

const totalSalariesNGN = totalSalariesUSD * exchangeRate;
console.log("Total salaries in NGN: NGN " + totalSalariesNGN); //Total salaries in NGN: NGN 11622000

////////////////////////////////////////////////////////////////////

//   Write a JavaScript program to compute the sum and product of an array of integers.

// Step 1: Create a function with the function name sumAndProduct with a single parameter
// Step 2: Declares two variables, sum and product. sum is initialized to 0 and will be used to get the sum of the array elements. product is initialized to 1 and will be used to get the product of the array elements.
// Step 3: Loop throught the array
// Step 4: add and assign the new values to the sum variable
// Step 5: Multiply and assign the new values to the product variable
// Step 6: end the loop
// Step 7: Returns an object containing the final values of sum and product and close th function
// Step 8: Assign the argument used to call the function to a variable
// Step 9: log a string "Sum" concatinating it to the object outcome.sum
// Step 10: log a string "Product" concatinating it to the object outcome.Product

function sumAndProduct(arr) {
    let sum = 0;
    let product = 1;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        product *= arr[index];
    }

    return { sum: sum, product: product };
}

const integers = [1, 2, 3, 4, 5];

const outcome = sumAndProduct(integers);
console.log("Sum:", outcome.sum); // Output: Sum: 15
console.log("Product:", outcome.product); // Output: Product: 120


/////////////////////////////////////////////////////////////////////
//Write a JavaScript function to get the last element of an array.
function getLastElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr.slice(-1)[0];
}

const numbers = [1, 2, 3, 4, 5];
console.log(getLastElement(numbers)); // Output: 5

const emptyArray = [];
console.log(getLastElement(emptyArray)); // Output: null

// Step 1: Create a function taking one parameter
// Step 2: Use the .length method to get the length of the array subtracting 1 to get the last index of the array 
// Step 3: return array
// Step 4: log the argument used to call the function in the console

const places = ["Lagos", "Calabar", "Delta", "Jos", "Ekiti"];

function getLastElement(array) {
    return array[array.length - 1]

}
console.log(getLastElement(["Lagos", "Calabar", "Delta", "Jos", "Ekiti"]));

/////////////////////////////////////////////////////////////////////////
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8



const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr1); //[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]

arr1.sort(function (a, b) { return a - b });
console.log(arr1); //[ -4, -3, 1, 2, 3, 5,  6, 7, 8 ]


///////////////////////////////////////////////////////////////////////////
// Square the value of every element in the array.
// Input : [1, 2, 3, 4, 5];
// Output: [1, 4, 9, 16, 25]

// Step 1: Defines a function called squareArray that takes one parameter, arr with the input of array
// Step 2: Create am empty array
// Step 3: Start a for loop that iterates over each element in the array arr
// Step 4: Inside the loop, the current array element arr[i] is multiplied by itself and added to the empty squaredArray using the push method and ends the loop
// Step 5: close the for loop and return squaredArray
// Step 6: Call the squareArray function with the inputArray array and assigns the returned array to the outputArray variable.
// Step 7: log outputArray to the console

function squareArray(arr) {
    let squaredArray = [];
    for (let i = 0; i < arr.length; i++) {
        squaredArray.push(arr[i] * arr[i]);
    }
    return squaredArray;
}

let inputArray = [1, 2, 3, 4, 5];
let outputArray = squareArray(inputArray);
console.log(outputArray); //  [1, 4, 9, 16, 25]


///////////////////////////////////////////////////////////////////////
//   const scores = [12, 55, 70, 47];
//   calculate and print the total: output "NGN 900"

// Step 1: Create an empty variable with the variable name total
// Step 2: Create a for loop to iterates over each element in the scores array. Inside the loop the current element scores[i] is added and assigned to empty variable and ends the loop

// Step 3: In the console.log, concatenate a string of "Total: NGN" to the total variable

const scores = [12, 55, 70, 47];

let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}

console.log("Total: NGN " + total); //Total: NGN 184


///////////////////////////////////////////////////////////////////

// return an array which will include all the cities having only the first letter of each city name capitalized.
// const cities = [
//   "miami",
//   "barcelona",
//   "madrid",
//   "amsterdam",
//   "berlin",
//   "sao paulo",
//   "lisbon",
//   "mexico city",
//   "paris"
// ];

/* Expected Ouput 1: 
[
  "Miami",
  "Barcelona",
  "Madrid",
  "Amsterdam",
  "Berlin",
  "Sao paulo",
  "Lisbon",
  "Mexico city",
  "Paris"
 ];
*/

/* Expected Ouput 2: 
[
  "1. Miami",
  "2. Barcelona",
  "3. Madrid",
  "4. Amsterdam",
  "5. Berlin",
  "6. Sao paulo",
  "7. Lisbon",
  "8. Mexico city",
  "9. Paris"
 ];
 */

const cities = [
    "miami",
    "barcelona",
    "madrid",
    "amsterdam",
    "berlin",
    "sao paulo",
    "lisbon",
    "mexico city",
    "paris"
];

// Step 1: Create Function  
// Step 2: Create an empty array
// Step 3: Loop through the array to get the element
// Step 4: Get the first character
// Step 5: Turn the first character to uppercase
// Step 6: Get the remaining character
// Step 7: Concatenate the first character to the remaining character
// Step 8:  Push into thr  empty array/new array
// Step 9: return the empty/new array
// Step 10: Log the argument

function capitalizeFirstLetter(cities) {
    let capitalizedCities = []
    for (let i = 0; i < cities.length; i++) {
        cities[i].charAt(0).toUpperCase();
        cities[i].slice(1);
        cities[i].charAt(0).toUpperCase() + cities[i].slice(i);
        capitalizedCities.push(cities[i].charAt(0).toUpperCase() + cities[i].slice(1));
    }
    return capitalizedCities

}

const capitalizedCities = (capitalizeFirstLetter([
    "miami",
    "barcelona",
    "madrid",
    "amsterdam",
    "berlin",
    "sao paulo",
    "lisbon",
    "mexico city",
    "paris"
]));
console.log(capitalizedCities);


//   [
//     "Miami",
//     "Barcelona",
//     "Madrid",
//     "Amsterdam",
//     "Berlin",
//     "Sao paulo",
//     "Lisbon",
//     "Mexico city",
//     "Paris"
//   ]



// Create a new array with capitalized and numbered city names using a for loop
// // concatenate with a string

function createNumberedCityList(cityList) {
    let numberedCities = [];
    for (let i = 0; i < cityList.length; i++) {
        numberedCities.push((i + 1) + ". " + cityList[i].charAt(0).toUpperCase() + cityList[i].slice(1));
    }
    return numberedCities;
}

const numberedCities = createNumberedCityList(["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"]);
console.log(numberedCities);
// [
//   "1. Miami",
//   "2. Barcelona",
//   "3. Madrid",
//   "4. Amsterdam",
//   "5. Berlin",
//   "6. Sao paulo",
//   "7. Lisbon",
//   "8. Mexico city",
//   "9. Paris"
// ]


////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to get the first element of an array. Passing a second parameter 'n' will return the first 'n' elements of the array.
// first([7, 9, 0, -2]) -> 7
// first([7, 9, 0, -2], 2) -> [7, 9]

// Step 1: create a function taking two parameters 
// Step 2: Use the slice method to slice out the first and second element 

function first(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

console.log(first([7, 9, 0, -2])); // Output: 7
console.log(first([7, 9, 0, -2], 2)); // Output: [7, 9]

///////////////////////////////////////////////////////////////////////
// Write a function to check if an array contains a particular number.
// contains([1, 2, 3, 4, 5], 3) ➞ true
// contains([1, 1, 2, 1, 1], 3) ➞ false

function containsNumber(array, value) {
    return array.includes(value)
}
console.log(containsNumber([1, 2, 3, 4, 5], 3)); //true
console.log(containsNumber([1, 1, 2, 1, 1], 3)); //false

///////////////////////////////////////////////////////////////////////
// JavaScript function that takes an array with mixed data type and calculates the sum of all numbers.
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25

function sumNumbers(array) { //[2, "11", 3, "a2" false, 5, 7, 1]
    let sum = 0; //sum is 0
    for (let i = 0; i < array.length; i++) { // i = 0; 0 < 8 ; 1< 8, 2< 8, 3<8, 4<8, 5<8, 6<8, 7<8, 8<8
        if (typeof array[i] === 'number') { //true false true fase false true true
            sum += array[i];//sum = 0 + 2, sum = 2 + 3, sum = 5 + 5, sum = 10 + 7, sum = 17 + 1, sum = 18
        }
    }
    return sum; //18
}
console.log(sumNumbers([2, "11", 3, "a2", false, 5, 7, 1])); //  18
console.log(sumNumbers([2, 3, 0, 5, 7, 8, true, false])); // 25


////////////////////////////////////////////////////////////////////////
// return true or false if Apple is in the array of fruits 
// Input: ["Banana", "Orange", "Strawberry", "Blueberry"] => false
// Input: ["Banana", "Orange", "Apple", "Blueberry"] => true

function includesApple(array) { //["Banana", "Orange", "Strawberry", "Blueberry"] , ["Banana", "Orange", "Apple", "Blueberry"]
    return array.includes("Apple") //false, true
}
console.log(includesApple(["Banana", "Orange", "Strawberry", "Blueberry"]));
console.log(includesApple(["Banana", "Orange", "Apple", "Blueberry"]));

///////////////////////////////////////////////////////////////////
// return element with name of cherries
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];
// Expected output: { name: 'cherries', quantity: 5 } 




function findCherries(array) {
    for (const element of array) {
        if (element.name === "cherries") {
            return element;
        }
    }
}

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

console.log(findCherries(inventory)); // Output: { name: "cherries", quantity: 5 }




///////////////////////////////////////////////////////////////////
// return first element greater than 10 
// const array = [5, 12, 8, 130, 44];
// Expected output: 12

function firstElementGreaterThanTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            return array[i];
        }
    }
}

console.log(firstElementGreaterThanTen([5, 12, 8, 130, 44]));


/////////////////////////////////////////////////////////////////////
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// [3, 6, 8, 2] => [6, 8]
function numbersGreaterThanFive(array) {
    let newNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            newNumbers.push(array[i]);
        }
    }
    return newNumbers;
}

console.log(numbersGreaterThanFive([3, 6, 8, 2])); // Output: [6, 8]



///////////////////////////////////////////////////////////////////// 
// Given an array of numbers, return a new array that only includes the even numbers.
//[3, 6, 8, 2] => [6, 8, 2]

function displayEvenNumbers(array) {
    let evenNumbers = [];
    for (const number of array) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers([3, 6, 8, 2]));


///////////////////////////////////////////////////////////////////////

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// ["dog", "wolf", "by", "family", "eaten", "camping"] => ["dog", "wolf", "by", "eaten"]

function getShorterCharacter(array) {
    let shortCharacter = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length <= 5) {
            shortCharacter.push(array[i]);
        }
    }
    return shortCharacter
}
const shortCharacter = getShorterCharacter(["dog", "wolf", "by", "family", "eaten", "camping"]);

console.log(shortCharacter); //[ 'dog', 'wolf', 'by', 'eaten' ]



////////////////////////////////////////////////////////////////////////
// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]



function filterClubMembers(array) {
    let members = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].member) {
            members.push(array[i]);
        }
    }
    return members;
}

const members = filterClubMembers([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]);

console.log(members);
// [
//   { name: 'Angelina Jolie', member: true },
//   { name: 'Paris Hilton', member: true },
//   { name: 'Bob Ziroll', member: true }
// ]


/////////////////////////////////////////////////////////////////////////
// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
// [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]



const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

function filterAdults(people) {
    const oldEnough = [];
    for (let i = 0; i < people.length; i++) {
        console.log(people[i].name, people[i].age);
        if (people[i].age > 18) {
            oldEnough.push(people[i]);
            console.log(people[i].name + "is old enough.");
        } else {
            console.log(people[i].name + "is not old enough.");
        }
    }
    return oldEnough;
}

const adults = filterAdults(people);

console.log("Adults:", adults);



// Write a JavaScript function to remove a specific element from an array.
// remove_array_element([2, 5, 9, 6], 5);
// result => [2, 9, 6]

function removeArrayElement(array, element) {
    const index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

const newResult = removeArrayElement([2, 5, 9, 6], 5);
console.log(newResult); // [2, 9, 6]


///////////////////////////////////////////////////////////////////
// Get all male characters and put in new array called maleArray - function one
// Get all female characters and put in new array called femaleArray - function two
const characters = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: 188,
        mass: 84,
        eye_color: "blue",
        gender: "male",
    },
];

function getMaleCharacters(characters) {
    const maleArray = [];
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].gender === "male") {
            maleArray.push(characters[i]);
        }
    }
    return maleArray;
}

const maleArray = getMaleCharacters(characters);
console.log(maleArray);

function getFemaleCharacters(characters) {
    const femaleArray = [];
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].gender === "female") {
            femaleArray.push(characters[i]);
        }
    }
    return femaleArray;
}

const femaleArray = getFemaleCharacters(characters);
console.log(femaleArray);
