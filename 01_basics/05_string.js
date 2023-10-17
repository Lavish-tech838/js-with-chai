const name="lavish";
const repoCount=50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('lavish-a-c')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="   lavish   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20lavish"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));