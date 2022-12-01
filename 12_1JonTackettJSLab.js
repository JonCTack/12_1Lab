//B. (but it's the start point)
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