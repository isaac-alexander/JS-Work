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
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 1) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); // 41

// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }




///////////////////////////////////////////////////////////////////////
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true

function freeShipping(order) {
    let totalCost = 0;
    for (let item in order) {
        totalCost += order[item];
    }
    return totalCost > 50.00
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })); //false
console.log(freeShipping({ "Flatscreen TV": 399.99 })); //true
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })); // true


//////////////////////////////////////////////////////////////////////
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addsNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;

    }
    return sum
}
console.log(addsNumbers(4)); //10
console.log(addsNumbers(10)); //55
console.log(addsNumbers(20)); //210
console.log(addsNumbers(30)); //465

////////////////////////////////////////////////////////////////////


// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. 
// Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // false


//////////////////////////////////////////////////////////////////
// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// "George Raymond Richard Martin";
// "GRRM";

function abbreviateName(name) {
    return name.split(' ').map(function (word) {
        return word[0];
    }).join('');
}
console.log(abbreviateName("George Raymond Richard Martin")); // GRRM

//////////////////////////////////////////////////////////////////////////

// Create a function to return the amount of potatoes there are in a string.
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

function potatoes(str) {
    return str.split("potato").length - 1;
}

console.log(potatoes("potato")); // 1
console.log(potatoes("potatopotato")); // 2
console.log(potatoes("potatoapple")); // 1


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
    for (let char of string) {
        if (char === char.toLowerCase()) {
            hiddenWord += char;
        }
    }
    return hiddenWord;
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