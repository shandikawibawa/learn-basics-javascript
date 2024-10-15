var name =  'Shandika';
var WhatDoYouWannaBecomeInYourLife =  'programmer';
var gender =  'male';
var twitterHandle =  '@shandika';

console.log(name);
console.log(WhatDoYouWannaBecomeInYourLife);
console.log(gender);
console.log(twitterHandle);


let num = 2;
// Basic Math
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 2);

let counter = 10;
counter++;
counter--;
counter--;
console.log(counter);

// let firstFavNum = 6; let secondFavNum = 1;

// console.log(firstFavNum + secondFavNum);
// console.log(firstFavNum - secondFavNum);
// console.log(firstFavNum * secondFavNum);
// console.log(firstFavNum / secondFavNum);
// console.log(firstFavNum % secondFavNum);
// console.log(firstFavNum ** secondFavNum);


let number = 10;

console.log(number + undefined);

// falsy

// -> false
// -> undefined
// -> 0
// -> -0
// -> NaN
// -> '', "", ``, (empty quotes)\

let notDefined = null;
console.log(notDefined);



let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 8;

console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb + undefined);

// Comparison Operators

// -> Relational Operators <- //

// > greater then
// < Less then
// >= Greater then or equal to
// <= less then or equal to

// example :
console.log(10 > 10); // false
console.log(10 < 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true

// -> Equality Operators <- //
// === strict equality = kesetaraan yang ketat (type + value)
// !== strict non-equality operators = ketidaksetaraan yang ketat (type + value)
// == lose equality operator = kehilangan operator kesetaraan(value)
// != lose not equality operator = tidak kehilangan operator kesetaraan (value)

// example :
console.log(10 === 10);
console.log(10 !== 10);
console.log(10 == 10);
console.log(10 != 10); 

let firstFavNum = 21;
let secondFavNum = 10;

console.log(firstFavNum > secondFavNum);
console.log(firstFavNum < secondFavNum);
console.log(firstFavNum >= secondFavNum);
console.log(firstFavNum <= secondFavNum);

console.log(firstFavNum === secondFavNum);


// let firstName = "Shandika";
// let secondName = "WebDev";

// 1. concatenation
// let fullName = firstName.concat(secondName);
// console.log(fullName);

//2. Append
// firstName += " WebDev YouTuber";
// console.log(firstName);

//3. Length
// console.log(firstName.length);
  
// 4. Cases
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// 5.slice
// console.log(firstName.slice(0, 5));

// 6. Split & Join
// console.log(firstName.split("").join("")); 

// 7. Includes
// console.log(firstName. includes('X'));

// 8. Trim
// console.log(firstName.trim());

// 9. 
let favActorLastName = "holland";
let favActorFirstName = "tom";
let fullName = `${favActorFirstName} ${favActorLastName}`;
let uppercase = fullName.toUpperCase();
let message = `My favorite Actor Is ${uppercase}, `;
message += 'his best actor spiderman than tobey'

console.log(message);

// -Convert string to number
// money = parseInt(money);
// money = +money;
// money = Number(money);


// Type Conversion
let money = '50.245';

// - convert string to decimal
money = parseFloat(money)

console.log(money);
console.log(typeof money);