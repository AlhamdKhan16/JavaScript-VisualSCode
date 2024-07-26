const  name = "Alhamd"
const repoCount = 50
// console.log(name + repoCount + " Value");

// console.log('Hello my name is ${name} and my repo count is ${repocount}');

const gameName = new String('Alhamd-Khan')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring (0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "    Alhamd    "
console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://alhamd.com/alhamd%20khan"
const(url.replace('%20'))