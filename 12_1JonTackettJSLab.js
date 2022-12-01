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
const randomThings = [1, 10, "Hello", true]
randomThings[0]
randomThings[2] = "World"
console.log(randomThings[2])
//D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2]
ourClass[4] = "Octocat"
ourClass.push("Cloud City")
//E.
const myArray = [5, 10, 500, 20]
myArray.push("Aegon","another string of my choice")
myArray.shift()
myArray.unshift("Bob Marley")
myArray.pop()
myArray.reverse()
//I did mutate the array. Mutate means change the original. It returns a reference to the array
//F.
let variableForSectionF = 1
if (variableForSectionF < 100){
  console.log("little number")
} else if (variableForSectionF >= 100){
  console.log("big number")
}
//G.
if (variableForSectionF < 5){
  console.log("little number")
} else if (variableForSectionF > 10){
  console.log("big number")
} else {
  console.log("monkey")
}
//H.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
kristynsCloset.splice(6,0,"raybans")
kristynsCloset[5] = "stained knit hat"
thomsCloset[0][0]
thomsCloset[1][0]
thomsCloset[2][0]
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}!`)
thomsCloset[1][2] = "Footie Pajamas"
//IV
//A.
//What a sassy question, I will do it regardless
const printGreeting = (name) =>{
  return `Hello there, ${name}!`;
}
console.log(printGreeting("Slimer"));
//B.
const printCool = (name) =>{
  return `${name} is cool`;
}
console.log(printCool("Captain Reynolds"));
//C.
const calcCube = (num) => {
  return (num ** 3);
}
console.log(calcCube(3))
//D.
const isVowel = (char) => {
  if (typeof(char) === "string"){
  char = char.toLowerCase()
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y"){
    return true
  } else {
    return false
  }
}
}
console.log(isVowel("e"))
console.log(isVowel("f"))
console.log(isVowel("A"))
console.log(isVowel("i"))
console.log(isVowel("O"))
console.log(isVowel("u"))
console.log(isVowel("Y"))
console.log(isVowel(1))
console.log(isVowel("test"))
//E.
const getTwoLengths = (string1, string2) => {
  if(typeof(string1) === "string" && typeof(string2) === "string"){
    return [string1.length, string2.length]
  }
}
//F.
const getMultipleLengths = (stringArray) => {
  result = stringArray.map(el => el.length)
  return result
}
//G.
const maxOfThree = (num1, num2, num3) => {
  var largest = num1
  if (largest < num2){
    var largest = num2
  } 
  if (largest < num3){
    var largest = num3
  }
  return largest
}
console.log(maxOfThree(9, 6, 1));
//H.
const printLongestWord = (stringArray) =>{
  lengthArray = stringArray.map(el => el.length)
  return stringArray[lengthArray.findIndex(el => el === Math.max(...lengthArray))]
}
//Objects? Which is V
//A.
user = {
  name: "tom",
  email: "tom@tom.com",
  age: 66,
  purchased: []
}
//B.
user.email = "tom@gmail.com"
user.age++
//C.
user.location = "townsburg"
//D.
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user.purchased[2])
//E.
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "townsburg",
  purchased: []
}
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")
console.log(user.friend.purchased[1])
//F.
for (let i = 0; i < user.purchased.length; i++){
  console.log(user.purchased[i])
}
for (let i = 0; i < user.friend.purchased.length; i++){
  console.log(user.friend.purchased[i])
}
const updateUser = () => {
  user.age++
  user.name.toUpperCase()
}
const oldAndLoud = (person) => {
  person.age++;
  person.name = person.name.toUpperCase();
}
oldAndLoud(user)
