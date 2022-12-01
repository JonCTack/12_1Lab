//A.
// 1. we can use commands such as "let"
// 2. we can use "="
// 3. we can assign with "="
// 4. declare is creating a variable, assign is giving a value to a variable, and define is giving input to a variable or function, or ensuring it's not undefined 
// 5. pseudocoding is labeling the steps neceissary in a code in simple writing such as "first, we need to compare the values"
// 6. the large percentage should be spent thinking instead of typing it
//B. 
let firstVariable = "Hello World"
firstVariable = 6
let secondVariable = firstVariable
secondVariable = "any string"
//the value of firstVariable is 6
let yourName = "Jonathan Tackett"
let greet = `Hello, my name is ` + yourName
//
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
//C. print true
  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
//D.
let animal = "cow"
if (animal == cow){
    console.log("mooooo")
} else {
    console.log("Hey! You're not a cow!")
}
//E.
const personAge = 77
if (personAge >= 16){
  console.log("Here are the keys!")
} else if (personAge < 16){
//this conditional is not necissary but I want to be sure to follow the directions
  console.log("Sorry, you're too young.")
}
