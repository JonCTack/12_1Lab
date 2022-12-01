//A.
// 1. we can use commands such as "let"
// 2. we can use "="
// 3. we can assign with "="
// 4. declare is creating a variable, assign is giving a value to a variable, and define is giving input to a variable or function, or ensuring it's not undefined 
// 5. pseudocoding is labeling the steps neceissary in a code in simple writing such as "first, we need to compare the values"
// 6. the large percentage should be spent thinking instead of typing it
//B. 
let firstVariable = "Hello World";
firstVariable = 6;
let secondVariable = firstVariable;
secondVariable = "any string";
//the value of firstVariable is 6
let yourName = "Jonathan Tackett";
let greet = `Hello, my name is ` + yourName;
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
let animal = "cow";
if (animal == "cow"){
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow!");
}
//E.
const personAge = 77;
if (personAge >= 16){
  console.log("Here are the keys!");
} else if (personAge < 16){
//this conditional is not necissary but I want to be sure to follow the directions
  console.log("Sorry, you're too young.");
}
//II
//A.
for(let i = 0; i < 11; i++){
  console.log(i);
}
// for(let i = 10; i < 401; i++){
//   console.log(i);
// }
// for(let i = 4; i < 1334; i++){
//   console.log(i*3);
// }
//commented out just because their output is so large, will uncomment later
//B.
for(let i = 1; i < 101; i++){
  if(i%2 == 0){
    console.log(i + "<-- is an even number");
  } else {
  console.log(i);
}
}
//C.
for(let i = 0; i < 101; i++){
  if(i%5 == 0 && i != 0){
    console.log(`I found a ${i}. High five!`);
  }
}
for(let i = 0; i < 101; i++){
  if(i%5 == 0 && i != 0){
    console.log(`I found a ${i}. High five!`);
  }
  if(i%3 == 0 && i != 0){
    console.log(`I found a ${i}. Three is a crowd`);
  }
}
//D.
let bank_account = 0;
for(let i = 1; i < 11; i++){
  bank_account += i;
}
console.log(bank_account)
bank_account = 0;
for(let i = 1; i < 101; i++){
  bank_account += i;
}
bank_account *= 2
console.log(bank_account)
///III.
//A.
//1. The things in an array are called indexes
//2. Indexes are in order
//3. You can model a list with an array
//B.
quotes = ["these",
"are",
"quotes"]
//C.
