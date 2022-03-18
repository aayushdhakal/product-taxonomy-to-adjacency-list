const fs = require('fs');

const buffer = fs.readFileSync('./adjacencyListTaxonomyFinal.json', 'utf8');
const jsonFormat = JSON.parse(buffer);

let value = 'Mobile Phone Charms & Straps';

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