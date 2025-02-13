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

// function toNumberArray(string) {
//     return string.map(Number);
// }
// console.log(toNumberArray(["9.4", "4.2"])); //[ 9.4, 4.2 ]
// console.log(toNumberArray(["91", "44"])); //[ 91, 44 ]

function  toNumberArray(arrayOfString) {
 const arrayOfNumbers = [];
 for (let index = 0 ; index < arrayOfString.length ; index++){
    arrayOfNumbers.push(Number(arrayOfString[index]))
 }  
 return arrayOfNumbers;

}
console.log('arrayOfNumbers' ,toNumberArray(["9.4", "4.2"]));

// function  toNumberArray(arrayOfString) {
//     const arrayOfNumbers = [];
//     for (const item of arrayOfString){
//        arrayOfNumbers.push(Number(item))
//     }  
//     return arrayOfNumbers;
   
//    }
//    console.log('arrayOfNumbers' ,toNumberArray(["9.4", "4.2"]));
   
   


/////////////////////////////////////////////////////////////////////////
// Create a function that takes an array of numbers or letters and returns a string.
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// function arrayToString(input) {
//     return input.join("");
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6])); //123456
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //abcdef

function arrayToString(array) { //create a function that takes on parameter
    let nString = "" //create an empty string 
    for (let index = 0; index < array.length; index++) {  //loop through the array 
        nString += array[index]        //concatenate elements of the array index to empty string (add and assign)
    }
    return nString //return string
}
console.log(arrayToString([1, 2, 3, 4, 5, 6])); //123456  //call the function with the argument and log it to the terminal
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //abcdef

/////////////////////////////////////////////////////////////
// Given two arguments, return an array which contains these two arguments.
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]

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

// const joinedWithCommas = myColor.join(',');
// console.log(joinedWithCommas); // ➞ "Red,Green,White,Black"

// const joinedWithPlus = myColor.join('+');
// console.log(joinedWithPlus); // ➞ "Red+Green+White+Black"

let joinedString = ""; //create empty string
let seperator = "+"

for (let index = 0; index < myColor.length; index++) { //loop through the array
    if (joinedString == "") { //concatenate if its an empty string
        joinedString += myColor[index]; //add the first element "Red"
    } else { //else concatenate if the string not empty add a comma (,)
        joinedString += seperator + myColor[index] //adds other elements concatenating them with the comma(,)
    }
}
 console.log(joinedString);
 


//////////////////////////////////////////////////////////////////////

// Write a JavaScript program to compute the sum and product of an array of integers.
// input: [2,4,6,8]
// output: sum is 20
  const input = [2,4,6,8] ;
  let sum1 = 0;

  for (let index = 0; index < input.length; index++) {
    sum1 += input[index];
    
  }
  console.log(sum1);
  
  ///////////////////////////////////////////////////////////////////////
//   JavaScript function to create a specified number of elements with a pre-filled numeric value array.
//   array_filled(6, 0) => [0, 0, 0, 0, 0, 0]
//   array_filled(4, 11) =>  [11, 11, 11, 11]

function array_filled( length, value) {
    const nArray = []
    for (index = 0; index < length; index++){
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

function objectToArray(obj) {
    const result = [];
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      result.push([key, obj[key]]);
    }
    return result;
  }
  
  console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
  })); // ➞ [["D", 1], ["B", 2], ["C", 3]]
  