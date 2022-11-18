// this is to traversing the list from the child to the parent

console.time('start')
const fs = require('fs');

const buffer = fs.readFileSync('./adjacencyListTaxonomyFinal.json', 'utf8');
const jsonFormat = JSON.parse(buffer);

let value = 'Jigsaw Puzzle Accessories';
// let value = 'Hair Curler Clips & Pins';

const traversValues = [];
let parent;
let child;
let a = 0;//to stop infinite looping

while (parent !== 'root' && a < 10) {
   let arrayPoint = jsonFormat.findIndex(({subParent}) => value === subParent)
 
   let tempParent = jsonFormat[arrayPoint];
   parent = tempParent.parent
   traversValues.push(value)
   value = parent;
   a++;
}

let showValues = '';
traversValues.forEach((value, index) => {
   showValues = showValues + `${value} ${traversValues.length - 1 > index ? '> ' : ''}`;
})

console.log(showValues);
console.timeEnd('start');