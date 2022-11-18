// https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt
// execution time is 6m43s
console.time('start')
const fs = require('fs');

//reading the file for the taxonomy in json format sample format
// {
//    "s.n": "2",
//    "PARENT": "Animals & Pet Supplies",
//    "SUB-PARENT_0": "Pet Supplies",
//    "SUB-PARENT_1": null,
//    "SUB-PARENT_2": null,
//    "SUB-PARENT_3": null,
//    "SUB-PARENT_4": null,
//    "SUB-PARENT_5": null
// }
const buffer = fs.readFileSync('./adjacencyListTaxonomyRaw.json', 'utf8');

//parsing the file to Json format as sample
// {
//    "parent": "root",
//       "subParent": "Animals & Pet Supplies",
//          "flag": "parent"
// }, {
//    "parent": "Animals & Pet Supplies",
//       "subParent": "Pet Supplies",
//          "flag": "child"
// }
const jsonFormat = (JSON.parse(buffer));

//to store the final output as array
let baseArray = [];

jsonFormat.forEach((elementObeject, index) => {
   let workingObject = elementObeject;
   delete workingObject['s.n']

   let tempPreviousValueForNext;
   let tempArrayForBaseArray = [];

   for (const key in value = workingObject) {
      //check if it is the root 
      let flag = 'child';

      //check if the sub-parent of the value is present or not .if it is not present then the only one that is present is considered as the parent
      if (!workingObject['SUB-PARENT_0'] && !workingObject['SUB-PARENT_1'] && !workingObject['SUB-PARENT_2'] && !workingObject['SUB-PARENT_3'] && !workingObject['SUB-PARENT_4'] && !workingObject['SUB-PARENT_5']) {
         flag = 'parent'
      }

      //processing as a root, if the value is root
      if (flag === 'parent') {
         tempPreviousValueForNext = 'root';

         //preparing the single object
         let storingObjectRoot = {
            parent: 'root',
            subParent: value[key],
            flag
         }

         //check if the object already exists on the array file 
         let findObject = baseArray.find((element) => JSON.stringify(storingObjectRoot) === JSON.stringify(element));

         //if the object isn't in the array we save it to array
         if (!findObject) {
            tempArrayForBaseArray.push(storingObjectRoot);
         }
         break;
      }

      //check if the previous variable consist of the value or not
      if (!!tempPreviousValueForNext) {

         //preparing the single object
         let storingObject = {
            parent: tempPreviousValueForNext,
            subParent: value[key],
            flag: value[key] === null ? 'leaf' : flag
         };

         //check if the object already exists on the array file 
         let findObject = baseArray.find((element) => JSON.stringify(storingObject) === JSON.stringify(element));

         //if the object isn't in the array we save it to array
         if (!findObject) {
            tempArrayForBaseArray.push(storingObject);
         }
      }

      tempPreviousValueForNext = value[key] != null ? value[key] : null;
   }

   //spreading the single array that has been prcessed from the single object
   baseArray.push(...tempArrayForBaseArray);
})

//wirting the output to the file 
const bufferWrite = fs.writeFileSync('./adjacencyListTaxonomyFinal.json', JSON.stringify(baseArray));

console.timeEnd('start');