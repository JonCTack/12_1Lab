//A.
// 1. we can use commands such as "let"
// 2. we can use "=" to change the value
// 3. we can assign with "=" by setting the variables equal to each other
// 4. declare is creating a variable or having it written (thisFunction()), assign is giving a value to a variable, and define is giving input to a variable or function, or ensuring it's not undefined 
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
// C.
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false == false);
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
//this conditional is not necessary but I want to be sure to follow the directions
  console.log("Sorry, you're too young.");
}
//II
//A.
//1.
for(let i = 0; i < 11; i++){
  console.log(i);
}
//2.
for(let i = 10; i < 401; i++){
  console.log(i);
}
//3.
for(let i = 4; i < 1334; i++){
  console.log(i*3);
}
//B.
for(let i = 1; i < 101; i++){
  if(i%2 == 0){
    console.log(i + "<-- is an even number");
  } else {
  console.log(i);
}
}
//C.
//1.
for(let i = 0; i < 101; i++){
  if(i%5 == 0 && i != 0){
    console.log(`I found a ${i}. High five!`);
  }
}
//2.
for(let i = 0; i < 101; i++){
  if(i%5 == 0 && i != 0){
    console.log(`I found a ${i}. High five!`);
  }
  if(i%3 == 0 && i != 0){
    console.log(`I found a ${i}. Three is a crowd`);
  }
}
//D.
//1.
let bank_account = 0;
for(let i = 1; i < 11; i++){
  bank_account += i;
}
console.log(bank_account);
//2.
bank_account = 0;
for(let i = 1; i < 101; i++){
  bank_account += i;
}
bank_account *= 2
console.log(bank_account);
///III.
//A.
//1. The things in an array are called indexes
//2. Indexes are in order
//3. You can model a list with an array or a parking garage
//B.
//1.
quotes = ["these",
"are",
"quotes"];
//C.
const randomThings = [1, 10, "Hello", true];
//1.
randomThings[0];
//2.
randomThings[2] = "World";
//3.
console.log(randomThings[2]);
//D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//1.
ourClass[2];
//2.
ourClass[4] = "Octocat";
//3.
ourClass.push("Cloud City");
//E.
const myArray = [5, 10, 500, 20];
//1.
myArray.push("Aegon","another string of my choice");
//2.
myArray.shift();
//3.
myArray.unshift("Bob Marley");
//4.
myArray.pop();
//5.
myArray.reverse();
//I did mutate the array. Mutate means change the original. It returns a reference to the array
//F.
let variableForSectionF = 1;
if (variableForSectionF < 100){
  console.log("little number");
} else if (variableForSectionF >= 100){
  console.log("big number");
}
//G.
//1.,2.,3.
if (variableForSectionF < 5){
  console.log("little number");
} else if (variableForSectionF > 10){
  console.log("big number");
} else {
  console.log("monkey");
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
//1.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
//2.
kristynsCloset.splice(6,0,"raybans");
//3.
kristynsCloset[5] = "stained knit hat";
//4.
thomsCloset[0][0];
//5.
thomsCloset[1][0];
//6.
thomsCloset[2][0];
//7.
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}!`);
//8.
thomsCloset[1][2] = "Footie Pajamas";
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
console.log(calcCube(3));
//D.
const isVowel = (char) => {
  if (typeof(char) === "string"){
  char = char.toLowerCase();
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y"){
    return true;
  } else {
    return false;
  }
}
}
console.log(isVowel("e"));
console.log(isVowel("f"));
console.log(isVowel("A"));
console.log(isVowel("i"));
console.log(isVowel("O"));
console.log(isVowel("u"));
console.log(isVowel("Y"));
console.log(isVowel(1));
console.log(isVowel("test"));
//E.
const getTwoLengths = (string1, string2) => {
  if(typeof(string1) === "string" && typeof(string2) === "string"){
    return [string1.length, string2.length];
  }
}
//F.
const getMultipleLengths = (stringArray) => {
  result = stringArray.map(el => el.length);
  return result;
}
//G.
const maxOfThree = (num1, num2, num3) => {
  var largest = num1;
  if (largest < num2){
    var largest = num2;
  } 
  if (largest < num3){
    var largest = num3;
  }
  return largest;
}
console.log(maxOfThree(9, 6, 1));
//I did initially use Math.max(), whoopsy
//H.
const printLongestWord = (stringArray) =>{
  lengthArray = stringArray.map(el => el.length);
  return stringArray[lengthArray.findIndex(el => el === Math.max(...lengthArray))]
}
//This does return the first word of max length in the array
//Objects? Which is V
//A.
//1.,2.
user = {
  name: "tom",
  email: "tom@tom.com",
  age: 66,
  purchased: []
};
//B.
//1.
user.email = "tom@gmail.com";
//2.
user.age++;
//C.
//1.
user.location = "townsburg";
//D.
//1.
user.purchased.push("carbohydrates");
//2.
user.purchased.push("peace of mind");
//3.
user.purchased.push("Merino jodhpurs");
//4.
console.log(user.purchased[2]);
//E.
//1.
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "townsburg",
  purchased: []
};
//2.
console.log(user.friend.name);
//3.
console.log(user.friend.location);
//4.
user.friend.age = 55;
//5.
user.friend.purchased.push("The One Ring");
//6.
user.friend.purchased.push("A latte");
//7.
console.log(user.friend.purchased[1]);
//F.
//1.
for (let i = 0; i < user.purchased.length; i++){
  console.log(user.purchased[i]);
}
//2.
for (let i = 0; i < user.friend.purchased.length; i++){
  console.log(user.friend.purchased[i]);
}
//G.
//1.,2.,3.
const updateUser = () => {
  user.age++;
  user.name.toUpperCase();
}
//2.? 4.?
const oldAndLoud = (person) => {
  person.age++;
  person.name = person.name.toUpperCase();
}
oldAndLoud(user);
//Cat Bonus
//1.
cat1 = {
  name: "kitty",
  breed: "calico",
  age: 5
};
console.log(cat1.age);
console.log(cat1.breed);
//2.
cat2 = {
  name: "tom",
  breed: "mix",
  age: 10
};
//3.
const combineCats = (cat1, cat2) => {
  comboCat = {
    name: cat1.name + cat2.name,
    age: 1,
    breed: `${cat1.breed}-${cat2.breed}`
  };
  return comboCat;
}
//4.
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));