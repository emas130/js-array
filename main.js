var femalesNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = maleNames.concat(femalesNames);

console.log(allNames);

var newName = ['Marian'];

if (allNames.indexOf(newName) === -1) {
   allNames.push('Marian');
}

console.log(allNames);
