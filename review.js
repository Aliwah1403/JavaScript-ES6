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

const amGreeting = (name = "User") => "Good Morning " + name;
console.log(amGreeting());

const howMany = (...args) => "You have passed " + args.length + " arguments";
console.log(howMany(1, 2, 3));
console.log(howMany(1, "string", null, [1, 2, 3], {}));

const arrValues = [2, 3, 56, 68, 2334];
const maximum = Math.max(...arrValues);
console.log(`Largest values is ${maximum}`);

const userDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 32,
    email: "johndoe12@hotmail.com"
};

console.log({ firstName, lastName, age, email } = userDetails);
console.log("User's first name is " + userDetails.firstName);

const userList = {
    user1: {
        age: 34,
        email: "shayan@hotmail.com"
    },

    user2: {
        age: 35,
        email: "peter123@gmail.com"
    }
};
const { user1: { age: userAge, email: userEmail } } = userList;
console.log(userAge);

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [e, f, , , , , , c] = [12, 23, 45, 56, 67, 3, 47, 57, 09]
console.log(c);

const profileData = {
    name: "Peter",
    age: 32,
    nationality: "Kenyan",
    location: "Coast"
};
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    return "His name is " + name;
}
console.log(profileUpdate(profileData));


const userPerson = {
    name: "Jordan",
    morningGreeting() {
        return `Good Morning ${userPerson.name}`;
    }
};
console.log(userPerson.morningGreeting());


class Novel {
    constructor(author) {
        this._author = author;
    }

    get writer() {
        return this._author;
    }

    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
};
const book = new Novel('anonymous');
console.log(book.writer);

book.writer = 'updatedAuthor';
console.log(book.writer);


const multiply = (x, y) => {
    return x * y;
}
export { multiply };