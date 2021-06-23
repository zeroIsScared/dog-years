//My human age
let myAge = 29; 
//The first 2 years
let earlyYears = 2; 
// Converting the first two years in dog years
earlyYears *= 10.5; 
//The later years
let laterYears = myAge - 2; 
// Converting the remaining years in dog years
laterYears *= 4; 
//Checking the result
console.log(laterYears);
//Calculating my age in dog years
let myAgeInDogYears = earlyYears +laterYears; 
// Introducing my name
let myName = 'Natalia'.toLowerCase(); 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is
 ${myAgeInDogYears} years old in dog years.`);

//Displaying the my age in dog years
document.write(`My name is ${myName}. I am ${myAge} years old in human years which is
${myAgeInDogYears} years old in dog years.`);