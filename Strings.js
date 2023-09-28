
let str1 = "Strive not to be a success, ";
let str2 = "but rather to be a value";
// try in console
//joining string - + and concat
str1+str2 
str1.concat(str2) //joins the two strings
str1.concat(**, str2) 

/*
Partitioning String

slice(start, end)
substring(start, end)
substr(start, length)
*/
str2.slice(4,10) //result - 'rather'
str2.slice(4) //result - 'rather to be a value'
//negative index counts backwards. Last character is -1
str2.slice(-5) //result - 'value'

str2.substring(4,10) //result - 'rather'
str2.substr(4,10) //result - 'rather to '

//replace
str1.replace('Strive','Aim') //result - 'Aim not to be a success, '

str1.toUpperCase() //result - 'STRIVE NOT TO BE A SUCCESS, '
str1.toLowerCase() //result - 'strive not to be a success, '

str1.length //result - 28

let str1 = "  Strive not to be a success, ";
str1.trim() //result - "Strive not to be a success,";

str1.trimStart() //result - "Strive not to be a success, ";
str1.trimEnd() //result - "S  trive not to be a success,";
	
let bill = 'Rs.10'
//padEnd - pads in the end until the length becomes 7
bill.padEnd(7,'0') //result-'Rs.1000'

str1[1] //result - 't'
str1.charAt(1) //result -'t'
//charCodeAt returns unicode value of character
str1.charCodeAt(1) //result - 116

//searching characters
str1.indexOf('e') //result - 5
str1.lastIndexOf('e') //result - 23
str1.indexOf('z') //result - -1

//searching words
str1.search('not') //result - 7
str1.search('nott') //result - -1

//check if a word is present or not
str1.includes('not') //result - true

str1.startsWith('S') //result - true

// Template Literals
// Introduced in 2015 with ECMAScript6 or ES6

let firstName = "Ramya";
let lastName = "Murali";
let city = "Chennai";

console.log(firstName + " " + lastName + " lives in " + city);

//string interpolation
console.log(`${firstName} ${lastName} lives in ${city}`);

//multiline string

let msg = `happy
birthday`;

console.log(msg)

//single and double quotes in string
msg = "cat's name is toto";

msg = `cat's name is "toto"`;

console.log(msg)