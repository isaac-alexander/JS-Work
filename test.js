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

