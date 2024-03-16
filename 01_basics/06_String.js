const name = "Yash" 
const repoConunt = 50

// console.log(name + repoConunt + " Value");

console.log(`Hellow my name is ${name} and my repo count is ${repoCunt}`);

const gameName = new String('yash-Bhatt')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Ash     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://youtube.com/$Yash Properties Dehradun"

console.log(url.replace('$', '@'));

console.log(url.includes('$Yash'));

console.log(gameName.split('_'));