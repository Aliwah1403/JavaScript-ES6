const myFunc = () => {
    const myVal = "value";
    return myVal;
}
console.log(myFunc());

const myFunc2 = () => "Value";
console.log(myFunc2());

const dateToday = () => new Date();
console.log(dateToday());

const addNum = (val) => val + val;
console.log(addNum(2));

const diffNum = val => val - 2;
console.log(diffNum(10));     
   
const multiplier = (num = 1) => num * num;
console.log(multiplier(4));
console.log(multiplier()); 

const amGreeting = (name = "User") => "Good Morning "+ name;
console.log(amGreeting());

const howMany = (...args)=> "You have passed " +args.length + " arguments";
console.log(howMany(1,2,3))