// (1) var, let, const variable //

// var example  (We can not use this variable)
// var firstName = "Ponkoj";
// console.log(firstName);
// firstName = "Anindita"; // we can change variable value & we can declear same variavle using var.
// console.log(firstName);

// let example
// let lastName = "Mondol";
// console.log(lastName);
// lastName = "Saha"; // we can change variable value & we can not declear same variavle using let.
// console.log(lastName);

// const example
// const firstName = "Ponkoj";
// console.log(firstName);
// firstName = "Mondol"; //we can not reassign variable value & we can not declear same variavle using const.
// console.log(firstName); // give an error: Uncaught TypeError.

// (2) Arrow Function //
//Example 1 (Normal function): // stucture: function > function name (showText) > parameter (text). call the function after {}.
function showText(text) {
  console.log(text);
}
showText("JavaScript Text");

// Example 2  (Arrow function with parameter) // structure : variable(const) > function name(ShowTheText) = parameter(text) => //call the function after {}.
const showTheText = (text) => {
  console.log(text);
};
showTheText("Arrow function Test");

// Example 3  (Arrow function without parameter)
const showTheText2 = () => {
  console.log("Normal text");
};
showTheText2();

// Example 4 (Arrow function in one line : in detail)
const showResult = (number) => {
  return number * 2;
};
showResult(2);
console.log(showResult(2));

// (Arrow function in one line : in short)
const showResult1 = (number) => number * 2;
console.log(showResult1(3));

// (3) Spread operator //  (Uses: to copy an existing Array or Object)
// Array Example
const num1 = [1, 2, 3, 4];
console.log(num1);

const num2 = [...num1, 5, 6]; // copy an previous array using spread operator(...) infornt of  .
console.log(num2);

// Object Example
const user1 = {
  fName: "Ponkoj",
  lName: "Mondol",
};
console.log(user1);

const user2 = {
  ...user1,
  age: 39,
};
console.log(user2);

// Another Example (when recceive unlimited parameters)
const getsNumbers = (...number) => {
  console.log(number[2]); // find specific parameter using index no.
};
getsNumbers(2, 4, 6, 8);

// (4) Destructuring //
//Array example
const num3 = [1, 2, 3]; //three items in one variable(num3)
// const n1 = num1[0];
// const n2 = num1[1];
// const n3 = num1[2];
const [n1, n2, n3] = num3; // three variable for each item in a array
console.log(n1);
console.log(n2);
console.log(n3);

//Object example
const user3 = {
  fiName: "Anindita",
  laName: "Mondol",
  age: 11,
};
const { age, fiName, laName } = user3; //use object key as a variable
console.log(age);
console.log(fiName);
console.log(laName);

// (5) Map
const num4 = [2, 4, 6, 8];
num4.map((num) => {
  console.log(num * 2);
});

// (6) filter() [ filter take a function as its value]//
const age1 = [32, 33, 16, 17, 18, 6, 40];

// take a variable (isVoter) with a parameter(voterAge)
function isVoter(voterAge) {
  return voterAge >= 18;
}

// save the function value into an variable(voterList)
const voterList = age1.filter(isVoter);
console.log(voterList); //return an Array like [32,33,18,40]

// (7) reduce() //
const num5 = [32, 33, 16, 17, 18, 6, 40, 55, 60];
function getTotal(first, next) {
  return first + next;
}
const total = num5.reduce(getTotal);
console.log(total);

// (8) Javascript Classes (define as a javascript object template)
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  // we can make a function into an a class
  age() {
    return 2023 - this.year;
  }
}
const myCar = new Car("BMW", 2017);
console.log(myCar);
const yourCar = new Car("Ford", 20223);
console.log(yourCar);

console.log(myCar.age()); //return 6

//  (9) Export & Import // use in index.html into script file

// Export defult

// Export Indivisually
