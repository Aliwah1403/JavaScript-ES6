//Program to calculate area of a circle
//Using anonymous arrow function

//Formula -> PI * r * r
const PI = 3.14159265359;

let result = (radius) => {
    // let radius = 7;
    return Math.round((PI * radius * radius * 100)) / 100 + "cm²";
    //this rounds it off to 2 decimal
}
console.log(result(7));



//Rewrite the myConcat function which appends contents of
// arr2 to arr1 so that the function uses arrow function syntax.

//var myConcat = function(arr1, arr2) {
//return arr1.concat(arr2);
//};
//
//console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));



//Modify the function increment by adding default parameters
// so that it will add 1 to number if value is not specified

//const increment = (number, value) => number + value;

const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));
console.log(increment(5));



//Modify the function sum using the rest parameter in such a way that the function sum is able
// to take any number of arguments and return their sum

//const sum = (x, y, z) => {
//const args = [x, y, z];
//return args.reduce((a, b) => a + b, 0);
//}

const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(0, 1, 2));
console.log(sum(1, 2, 3, 4));


//copy the contents of arr1 into arr2 using the spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
console.log(arr1);
let arr2;

arr2 = [...arr1];
console.log(arr2);



//Replace the two assignments with an equivalent destructuring assignment.
//const HIGH_TEMPERATURES = {
//    yesterday: 75,
//    today: 77,
//    tomorrow: 80
//};
//
//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today);
console.log(tomorrow);

// Replace the two assignments with an equivalent destructuring assignment.
// It should still assign the variables highToday and highTomorrow
// the values of today and tomorrow from the HIGH_TEMPERATURES object.
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday);
console.log(highTomorrow);


// Replace the two assignments with an equivalent destructuring assignment.
// It should still assign the variables lowToday and highToday 
// the values of today.low and today.high from the LOCAL_FORECAST object.
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday2 } } = LOCAL_FORECAST;
console.log(lowToday);
console.log(highToday2);



//Use destructing assignment to swap the values of a and b so that a receives the value stored in b and vice versa
let a = 8, b = 6;

[a, b] = [b, a];
console.log(a, b);



//Use a destructing assignment with the rest syntax to emulate the behaviour of Array.prototype.slice()
//.removeFirstTwo() should return a sub-array of the original array list without the first two elements
function removeFirstTwo(list) {
    const [y, z, ...shorterList] = list;

    //here we store the first two elements in y and z
    //then the remaining elements we store them in an array called shorterList
    //(=list) means we are using the array assigned to list...which in turn is assigned to source (source = list)

    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);



//use destructing assignment within the argument to the function half to send only max and min inside the function
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// const half = (stats) => {
//     return (stats.max + stats.min) / 2.0;
// }

const half = ({ max, min }) => {
    return (max + min) / 2.0;
}
console.log(half(stats));



//use template literal syntax to create an array of list element(li) strings.
//Each list element's text should be one of the array elements from the failure property on the
//result object and have a class attribute with the value (text-warning).
//the (makeList) function should return the array of list item strings
//use any iterator method(any loop) to get the desired output

const result1 = {
    success: ["max-length", "no-amd", "prefer-arrow-funcitons"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    const failuerItems = [];
    for (let i = 0; i < arr.length; i++) {
        failuerItems.push(`<li class="text-warning">${arr[i]}</li>`);

    }

    return failuerItems;
}
const failuresList = makeList(result1.failure);
console.log(failuresList);



//Use object property shorthand with object literals to create and return an object
// with name, age and gender properties
const createPerson = (name, age, gender) => {

    return ({ name, age, gender });

};
console.log(createPerson("Zodiac Hasbro", 32, "Male"));



//Using the class keyword and constructor
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);



//Use the class keyword to create a (Thermostat) class. The constructor accepts a Farenheit temperature
//In the class, create a getter to obtain the temperature in Celsius and a setter to set it in Celcius

//C = 5/9 * (F - 32)
//F = C * 9.0 / 5 + 32

class Thermostat {
    constructor(farenheit) {
        this._farenheit = farenheit;
    }

    //getter
    get temperature() {
        //this converts farenheit to celcius
        return this._farenheit = Math.round(5 / 9 * (this._farenheit - 32) * 100) / 100;
    }

    // setter
    set temperature(celsius) {
        //this converts celclius to farenheit
        this._farenheit = celsius * 9.0 / 5 + 32;
    }
}

const thermos = new Thermostat(76); //Setting in Farenheit scale

let temp = thermos.temperature; //Converts to Celsius scale
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; //Maintains temp setting in Celsius
console.log(temp);



//Use either of the export examples
const upperCaseString = (string) => {
    return string.toUpperCase();
}

const lowerCaseString = (string) => {
    return string.toLowerCase();
}

export { upperCaseString, lowerCaseString };



//Promises with then and catch
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
        makeServerRequest.then(result => {
            console.log(result);
        })
    }
    else {
        reject("Data not received");
        makeServerRequest.catch(error => {
            console.log(error);
        })
    }
});