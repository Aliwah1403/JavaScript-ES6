//Reuse JavaScript code using import
//import allows you to choose which parts of a file or module to load
import { add } from "./math_functions";
console.log(add(1, 2));

//here import will find add from where we exported it from
//all this is in the same folder as the current file
//the (./) tells the import to look for the file in the same folder
//the relative path(./) and the file extension(.js) are required when using import this way

//you can import more than one item from the file by doing it like this
//import { add, subtract } from "./math_functions";



import { upperCaseString, lowerCaseString } from "./practice";
console.log(upperCaseString("hello"));
console.log(lowerCaseString("WORLD"));



//Use * to import everything from a file
//Can be done with the (import * as) syntax

//Eg
import * as myMathModule from "./math_functions";

//the above import statement will create an object called myMathModule.
//the object will contain all of the exports from the math_functions.js file
//you can access the functions in this file like you would any other object property

myMathModule.add(2, 3);
myMathModule.subtract(5, 3);



//Create an esport fallback with export default
//this will usually be used if only 1 file is being exported from a file
//it is also used to create a fallback value for a file or module

export default function add2(x, y) {
    return x + y;
}

export default function (x, y) {
    return x + y;
}

//the first is a named function and the second an anonymous function
//since (export default) is used to declare a fallback value for a module or file
//you can only have one value be a default export in each module or file
//Additionally you cannot use (export default) with (var)(let) or (const)



//import a default export
import add2 from "./math_functions";

//main thing here is the thing being imported is not inside curly braces{}