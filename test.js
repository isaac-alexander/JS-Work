function printName() {
    const data = "Ayo";
    console.log(data);
}

printName();


function person() {
    const firstName = "Alex";
    const lastName = "Isaac";
    console.log(firstName + " " + lastName);
}
person();
// minutes to seconds 
//initialize minutes variable to 15
//calculate and log the seconds

//create a variable called result


function minuteToSeconds(minutes) {
    const secondsPerMinute = 60;
    const seconds = secondsPerMinute * minutes;
    console.log("There are " + seconds + " seconds in 15 minutes"); //900

}
minuteToSeconds(15)

function minuteToSeconds(minutes) { //parameter is minutes
    const secondsPerMinute = 60;
    console.log("There are " + minutes * secondsPerMinute + " seconds in " + minutes + " minutes"); // statements
}



minuteToSeconds(15) // argument is 15
minuteToSeconds(66) // argument is 66
minuteToSeconds(5) // argument is 5



// age to days
//initialize age with 25
//calculate and log the days

function ageToDays(age) {
    const daysInAYear = 365;
    const days = age * daysInAYear;
    console.log("The person who is aged 25 has lived " + days + " days"); //9125

}
ageToDays(25)

function ageToDays2(age) {
    const daysInAYear = 365;
    console.log("The person who is aged 25 has lived " + daysInAYear * age + " days");
}
ageToDays2(25)

function ageToDays3(age, days) {
    return age * days;
}
const days = ageToDays3(25, 365)
console.log("The person who is aged 25 has lived " + days + " days"); //9125

// hours to seconds 
//initialize hours variable to 15
//calculate and log the seconds

function hoursToSeconds(hours) {
    const secondsInAnHour = 3600;
    const seconds = hours * secondsInAnHour;
    console.log("We have " + seconds + " seconds in 15 hours"); //54000

}
hoursToSeconds(15)


function hoursToSeconds$(hours) { //parameter is hours
    const secondsPerHour = 3660;
    console.log(" There are " + hours * secondsPerHour + " seconds in " + hours + " hours"); // statements
}

hoursToSeconds$(15) // argument is 15



function hoursToSeconds2(hours) {
    const secondsPerHour = 3660;
    console.log(" There are " + hours * secondsPerHour + " seconds in " + hours + " hours"); // statements
    return hours * secondsPerHour;
}

let seconds = hoursToSeconds2(15)
console.log(" We have " + seconds + " seconds in 15 hours"); //54000

// area of square
//initialize the side to 6
// calculate and log the area

function calculateArea(side) {
    const area = side ** 2;
    console.log("The area of the square is " + area); //36

}
calculateArea(6)

function calculateArea$(side) {
    return side ** 2;
}
let area = calculateArea$(6);
console.log("The area of the square is " + area); //36

// perimeter of rectangle
//initialize the length to 12 and width to 13
// calculate and log the area

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

let perimeter = calculatePerimeter(12, 13);
let value = calculatePerimeter(3, 5)
console.log("The perimeter of the rectangle is " + perimeter);
console.log("The perimeter of the rectangle is " + value);

// Function to sum of every positive element
// [1, -4, 12, 0, -3, 29, -150];


function sumPositiveNumbers(array) {
    let sum = 0; //sum is 0
    for (let i = 0; i < array.length; i++) { //i = 0; 0 < 7 (true),i = 1; 1 < 7(true),i = 2; 2 < 7(true),i = 3; 3 < 7(true),i = 4; 4 < 7(true),i = 5; 5 < 7(true),i = 6; 6 < 7(true); i = 7; 7 < 7(false); ends...
        if (array[i] > 0) { // 1 > 0(true), -4 > 0(false), 12 > 0(true), 0 > 0(false), -3 > 0(false), 29 > 0(true), -150 > 0(false)
            sum += array[i]; // sum= 0 + 1, sum = 1. sum = 1 + 12, sum = 13. sum = 13 + 29, sum = 42.
        }
    }
    return sum; //return 42
}
console.log('sumPositiveNumbers', sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); // 42

// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }

function createObject(array) { //function to create an object
    let object = {}; //create empty object
    for (let i = 0; i < array.length; i++) { // i = 0; 0 < 2(true); i = 1; 1 < 2(true); i = 2; 2 < 2(false);
        object[array[i]] = array[i].toUpperCase(); // p =  P (key = value) ; s = S (key = value)
    }
    return object // return {key : value} {p: "P", s: "S"}
}
console.log('Create object', createObject(["p", "s"]));
console.log('Create object', createObject(["a", "b", "c"]));
console.log('Create object', createObject(["a", "v", "y", "z"]));


///////////////////////////////////////////////////////////////////////
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true

function freeShipping(order) {
    let totalCost = 0; // assign zero(empty) to totalCost
    for (let item in order) { // loop through the key of the object "Shampoo"; "rubber Ducks"
        totalCost += order[item]; //totalCost = 0 + 5.99; totalCost = 5.99. totalCost = 5.99 + 15.99; totalCost = 21.98.
    }
    return totalCost > 50.00 // return 21.98 > 50.00 (false)
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })); //false
console.log(freeShipping({ "Flatscreen TV": 399.99 })); //true
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })); // true


//////////////////////////////////////////////////////////////////////
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addsNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) { // i = 1; 1 <= 4(true); i = 2; 2 <= 4(true); i = 3; 3 <= 4(true); i = 4; 4 <= 4(true); i = 5; 5 <= 4(false); .....end
        sum += i; //sum = 0 + 1 sum = 1; sum = 1 + 2 = sum = 3; sum = 3 + 3 sum = 6; sum = 6 + 4 sum = 10;

    }
    return sum // return 10
}
console.log(`sum = `, addsNumbers(4)); //10
console.log(`sum = `, addsNumbers(10)); //55
console.log(`sum = `, addsNumbers(20)); //210
console.log(`sum = `, addsNumbers(30)); //465

////////////////////////////////////////////////////////////////////


// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. 
// Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24; //&& and operator checks if both vaues are true
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // false


//////////////////////////////////////////////////////////////////
// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// "George Raymond Richard Martin";
// "GRRM";

function abbreviatedName(name) { //function to abbrevaiate a name
    let arrayOfName = name.split(' '); // covert the strings of names to an array of names and assign to a variable(arrayOfName) [ 'George', 'Raymond', 'Richard', 'Martin' ]
    let shortName = []; // create an empty array 
    for (let i = 0; i < arrayOfName.length; i++) { // i = 0; 0 < 4(true); i = 1; 1 < 4(true); i = 2; 2 < 4(true); i = 3; 3 < 4(true); i = 4; 4 < 4(false)........end
        shortName.push(arrayOfName[i].charAt(0)); //[G]; [G,R]; [G,R,R]; [G,R,R,M];

    }
    return shortName.join('') //return [G,R,R,M] as a string = "GRRM"

}
console.log(abbreviatedName("George Raymond Richard Martin"));

//////////////////////////////////////////////////////////////////////////

// Create a function to return the amount of potatoes there are in a string.
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

function potatoes(str) {
    return str.split("potato").length - 1; //the split method with a specified character adds an extra length to the array if nothing occurs before and after the word. length -1 substract and gives the actual length
}

console.log(`potato length = `, potatoes("potato")); // potato length = 1
console.log(`potato length = `, potatoes("potatopotato")); // 2
console.log(`potato length = `, potatoes("potatoapple")); // 1


//////////////////////////////////////////////////////////////////

//   Create a function that takes two arrays and insert the second array in the middle of the first array.
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function tuckIn(array1, array2) {
    const result = array1.slice(); // Make a copy of the first array
    console.log(result);

    result.splice(1, 0, ...array2); // adds array2 from the index 1 and the spread operator spreads the element of array2
    return result; 

}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/////////////////////////////////////////////////////////////////////

//   A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules: The wanted word is in lowercase. The crowd of letters is all in uppercase. Note that the word will be spread out amongst the random letters, but their letters remain in the same order. detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat" detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// create a function
// create an empty string
// loop through the string to get lower case characters
// add and assign lowercase characters to the empty string


function detectWord(string) {
    let hiddenWord = ''; 
    for (let char of string) { //loops through the characters of the strings UcUNFYGaFYFYGtNUH
        if (char === char.toLowerCase()) { //checks and get characters strictly in lowerCase 'c', 'a', 't'
            hiddenWord += char; //adds and assign them to empty string. hiddenWord = '' + 'c', hiddenWord = 'c'; hiddenWord= 'c' + 'a' , hiddenWord = 'ca'; hiddenWord= 'ca' +'t', hiddenWord = 'cat'
        }
    }
    return hiddenWord; //return cat
}

console.log(detectWord("UcUNFYGaFYFYGtNUH")); // "cat"
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")); // "burglar"


////////////////////////////////////////////////////////////////////////
// Write a JavaScript program to count the number of arrays inside a given array. ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2 ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3 Expected Output: Number of arrays inside the said array: 2 Number of arrays inside the said array: 3

function countArrays(array) {
    let count = 0;
    for (let item of array) {
        if (Array.isArray(item)) {
            count++;
        }
    }
    return count;
}

console.log(`Number of arrays inside the said array: ${countArrays([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])}`); // 2
console.log(`Number of arrays inside the said array: ${countArrays([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])}`); // 3

//   Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function findLongestWord(str) {
    let words = str.split(" ");
    console.log(words);

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

const exampleString = "Web Development Tutorial";
const longestWord = findLongestWord(exampleString);
console.log(longestWord); // 'Development'


////////////////////////////////////////////////////////////////
//   Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

const sampleNumbers = [-5, -2, -6, 0, -1];
console.log(`The largest number is ${findLargest(sampleNumbers)}`); // "The largest number is 0"

/////////////////////////////////////////////////////////////////////////
// Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]

function findNaNIndexes(arr) {
    let indexes = [];

    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i])) {
            indexes.push(i);
        }
    }

    return indexes;
}

console.log(findNaNIndexes([2, NaN, 8, 16, 32])); // [1]
console.log(findNaNIndexes([2, 4, NaN, 16, 32, NaN])); // [2, 5]
console.log(findNaNIndexes([2, 4, 16, 32])); // []
