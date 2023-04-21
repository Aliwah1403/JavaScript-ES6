//Comparing scopes of var and let keywords

//When you declare a variable with var its declared globally, or locally if declared inside a function
// -- meaning when in a function it is only seen/used inside that function and not outside

//let works similarly but with some extra features
//when you declare a variable with let inside a block, statement or expression, its scope is limited to that
// --block, statement or expression

//EG
var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
//With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable.

//the code above is similar to the one below
var numArray2 = [];
var i;
for (i = 0; i < 3; i++) {
    numArray2.push(i);
}
console.log(numArray2);
console.log(i);

//This will cause future problems if you were to create a function and store it for later use inside
//-- a for loop that uses the i variable. This is because the stored function will always refer to the
//-- value of the updated global i variable



//Mutate an array declared with const
//Objects(including arrays and functions) assigned to a variable with const are mutable but cannot be reassigned

//eg
const s = [5, 6, 7];

//s = [1, 2, 3];
//code (s = [1, 2, 3] will have an error because you cannot reassign a variable declared with const)

s[2] = 45;
console.log(s);



//Preventing Object Mutation
//Since const keyword alone cant protect your data from being mutated
//javascript has an (Object.freeze) function that prevents object mutation
//Any attmept to change the object will be rejected, with an error thrown if the script is in strict mode

//eg
let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};

Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
//here obj will still return its original values because we used Object.freeze() on it



//Using arrow functions to write concise anonymous functions
//in js we often dont need to name our functions especially when passing a function as an argument
//to another function. instead we create inline functions.
//we dont need to name these functions because we dont reuse them anywhere else
//to achieve this we use the following syntax:
const myFunc = function () {
    const myVar = "value";
    return myVar;
}
console.log(myFunc());

//ES6 provides us with the syntatic sugar to not have to write anonymous functions this way
//Instead you use arrow function syntax:

const myFunc2 = () => {
    const myVar = "value";
    return myVar;
}
console.log(myFunc2());

//When there is no function body, arrow function allows you to omit the return keyword and the brackets
//surrounding the code
//this helps simplify functions into one-line statements

const myFunc3 = () => "value";
console.log(myFunc3());
//the code will still return the string "value" by default

const magic = () => new Date();
console.log(magic());
// new Date() returns the current date and time



//Writing arrow functions with parameters
//eg
const doubler = (item) => item * 2;
console.log(doubler(2));

//if theres only 1 parameter being passed then you can get rid of the parenthesis
const square = sq1 => sq1 * sq1;
console.log(square(4));

//you can also have more than 1 parameter
const multiplier = (item, multi) => item * multi;
console.log(multiplier(3, 2));



//Setting default parameters for your functions
//These will be used when no parameter is passed while calling the function
//eg
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());



//Using the rest parameter with function parameters
//With the rest parameter, you can create functions that take a variable number of arguments
//These arguments are stored in an array that can be accessed later from inside the function.
//eg

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));



//Using the spread operator to evaluate arrays in-place
//the spread operator allows us to expand arrays and other expressions in places where
// multiple parameters or elements are expected

//eg
const arr = [6, 3, 89, 40];
const maximus = Math.max(...arr);
console.log(maximus);

//here (...arr) returns an unpacked array. Spreads the array into comma seperated arguments/values since
//Math.max() expects comma seperated arguments/values

//spread operator only works in-place
//like in an argument to a function or an array literal



//Use Destructuring Assignment to Extract Values from Objects
//Used to neatly assign values taken direct from an object

//ES5 code for assigning values from objects
const user = {
    name: "John Doe",
    age: 32
};

const name = user.name;
console.log(name);

const age = user.age;
console.log(age);


//ES6 destructing assignment
const { name1, age1 } = user;
//the same values will be displayed as the one in the ES5 way
//this is a cleaner and shorter way



//Use Destructuring Assignment to Assign Variables from Objects
//Destructing allows you to assign new vaiable names while extracting values from objects
//You can do this by putting a colon before the new name you want to use

//using same const user = {name: "John Doe", age: 32}
const { name: userName, age: userAge } = user;



//Use Destructuring Assignment to Assign Variables from Nested Objects
const user1 = {
    johnDoe: {
        age2: 34,
        email: "johndoe@gmail.com"
    }
};

//extracting values
const { johnDoe: { age2, email } } = user1;
console.log(age2);
console.log(email);

//assigning new variable names
const { johnDoe: { age2: johnAge, email: johnEmail } } = user1;
console.log(johnAge);
console.log(johnEmail);



//Use destructing assignment to assign variables from arrays
//Key difference between spread operator and array destructing is that the spread operator unpacks
//all the contents of an array into a comma seperated list

//On the other hand...array destructing alows us to pick and choose which elements we want to assign to variables

//eg
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
//here a is assigned the first value of the array and b is assigned the second value

//We can also access the value at any index in an array with destructing by using commas to reach desired index
//eg
const [e, f, , , g] = [1, 2, 3, 4, 5, 6];
console.log(e, f, g);
//the commas with no values after are indexes we want to skip
//here we access indexes with values 1, 2
//then skip indexes with values 3, 4



//Destructing via rest elements
//In some situations involving array destructing we might want to collect the rest of the array elements
//in a seperate array

//eg
const [j, k, ...arr2] = [1, 2, 3, 4, 5, 7];
console.log(j, k); //this displays the first two elements in the array

console.log(arr2);//this displays the rest of the elements in the array

//This only works correctly as the last variable in the list
//  Meaning you cannot use it to catch a subarray that leaves out the last element of the original array



//Using destructing assignment to pass an object as a function's parameters
//in some cases you can destructure the object in a function argument itself

//eg
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}

//this effectively destructures the object sent into the function

//the same thing above can be done in place

// const profileUpdate = ({name,age,nationality,location}) => {

// }



//Create strings using template literals
//A template literal is a special type of string that makes creating complex strings easier
//They allow you to create multi-line strings and to use interpolation features to create strings

//eg
const person = {
    name: "Zodiiac Hasbro",
    age: 32
};

const greeting1 = `Hello, my name is ${person.name}!
 I am ${person.age} years old.`;
console.log(greeting1);

//here we use backsticks(` `) to enclose the text
//template literals allow the text to be multi-line...eliminating the use of \n
//the ${variable} syntax is a placeholder
//This eliminates the use of concatenation with (+)
//to add variables to strings you drop the variable in a template string and wrap it with ${ }.
//you can also include other expressions in your string literal
//eg ${a + b}



//Write Concise Object Literal Declarations Using Object Property Shorthand
//The following code
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

//ES6 provides a syntax to remove the redundancy of having to write x: x(or something equivalent)
//Same code above can be written as:
const getMousePosition1 = (x, y) => ({ x, y });



//Write Concise Declarative Functions with ES6
//ES5 code
const person1 = {
    name: "Taylor",
    sayHello: function () {
        return `Hello my name is ${person1.name}`;
    }
};
console.log(person1.sayHello());

//ES6 code
const person2 = {
    name: "Ryan",
    sayHello() {
        return `Hello my name is ${person2.name}`;
    }
};
console.log(person2.sayHello());

//the ES6 syntax allows us to remove the function keyword together with the colon altogether when definig
//functions in objects



//Use class Syntax to Define a Constructor Function
//ES6 provides a new syntax to create objects
//we use the (class) keyword
//In ES6, a class declaration has a constructor method that is invoked with the new keyword.
// If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

//Explicit constructor -- has an argument(s)
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}


//Implicit constructor -- has no argument(s)
class Rocket {
    launch() {
        console.log("To the moon!");
    }
}


const zeus = new SpaceShuttle('Jupiter');
zeus.takeOff(); //this will print "To Jupiter!"


const atlas = new Rocket();
atlas.launch(); //prints "To the moon!"

//It should be noted that the class keyword declares a new function, to which a constructor is added.
//this constructor is invoked when (new) is called to create a new object.
//UpperCamelCase should be used by convention for ES6 class names, as in (SpaceShuttle) used above
//The constructor method is a special method for creating and initializing an object created with a class



//Using getters and setters to control access to an object
//you can obtain values from an object and set the value of a property within an object(getters and setters)

//Getter Function
//They are simply meant to return (get) the value of an object's private variable to the user without the user
//directly accessing the private variable

//Setter Functions
//Meant to modify(set) the value of an object's private variable based on the value passed into it
//This change could involve calculations, or even overwriting the previous values completely

//It is convention to precede the name of a private variable with an underscore

//Eg
class Book {
    constructor(author) {
        this._author = author; //we preceded (_author) with an underscore to indicate its a private variable
    }

    //getter
    get writer() {
        return this._author;
    }

    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const novel = new Book('anonymous');
console.log(novel.writer);

novel.writer = 'newAuthor';
console.log(novel.writer); //this will display the changed version of (novel.writer)



//Use export to share a code block
//Imagine having a file called (math_functions.js) that contain several functions related to math problems
//One of them is stored in a variable(add)that takes in two numbers and returns their sum
//You want to use this function in several other JS files
//In order to share it, you first need to export it

//EG
export const add = (x, y) => {
    return x + y;
}
//the above is a common way to export a single function, but you can achieve the same thing like this: 

const subtract = (x, y) => {
    return x - y;
}
export { subtract };

//when you export a variable or function, you can use it in another file without having to rewrite code
//you can export multiple things by repeating the first example for each export
//or by placing them all in the export statement of the second example like this: 
export { add, subtract };

//CODE ON IMPORT CONCEPT WILL BE ON INDEX.JS



//Create a JavaScript Promise
//used to make a promise to do something, usually aynchronously
//when the task completes you either fulfill your promise or fail to do so
//(Promise) is a construtor function, so you need the (new) keyword to create one
//it takes a function as an argument with 2 parameter : (resolve) (reject)
//(resolve) and (reject) are the methods used to determine the outcome of the promise

//SYNTAX:
const myPromise = new Promise((resolve, reject) => {
    //block of code
});



//Complete a promise with resolve and reject
//A promise has 3 states: (pending), (fulfilled) and (rejected)
//a promise is (pending) if you did not add a way to complete the promise
//the (resolve) and (reject) are used to complete a promise
//the (resolve) is used when you want your promise to succeed
//(reject) is used when you want it to fail

//these are the methods that take an argument:
const thisPromise = new Promise((resolve, reject) => {
    let condition;
    if (condition) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});



//handle a fulfilled promise with then
//promises are most useful when you have a process that takes an
// unknown amount of time in your code(sth asynchronous), often a server request
//when you make a server request it takes some time, and after it completes you usually want to do something
//with the response from the server
//this can be achieved by using the (then) method.
//the (then) method is executed immediately after your promise is fulfilled with (resolve)

//SYNTAX
thisPromise.then(result => {

});
//(result) comes from the argument given to the (resolve) method



//handle a rejected promise with catch
//(catch) is a method used when your promise has been rejected
//it is executed immediately after a promises's (reject) method is called

//SYNTAX
thisPromise.catch(error => {

});
//error is the argument passed in to the reject method