console.time('start')
const fs = require('fs');

const buffer = fs.readFileSync('./adjacencyListTaxonomyRaw.json', 'utf8');
const jsonToArray = JSON.parse(buffer);

let value = 'Animals & Pet Supplies';
// value = 'Embellishments & Trims';
// value = 'Arts & Crafts';

let wordStore = [];//store to storing the unique childs of the each parent

//to store at which level the data is saved on.
let onState;

// traversing each array to work with
jsonToArray.forEach(element => {

   // check at each object of an array to find the current level of the given data ('Animals & Pet Supplies' as PARENT level) and if the level is found then it will not run on next tarversing value(like a switch ). 
   if (onState === undefined) {
      //traversing the each object in the array 
      for (const key in obj = element) {
         //if the value iss found then we assign the value to variable "onState"
         if (value === obj[key]) {
            //assigning the temporary file to the object
            onState = [key, obj[key]]
            //pushing the given value to the array/store
            wordStore.push(value)
            break;
         }
      }
   }

   //check if the onState has the value or not it will not run until the value is not set if the value is found then it will store the key and value to the array as 0 to 1 on array respectively 
   if (onState && element[onState[0]] === onState[1]) {
      
      //it is like a switch it is used not push the upper value of the object for example if the onState is set on SUB-PARENT_3:'Cat Beds' then it is used to select only the level below like SUB-PARENT_4,SUB-PARENT_5 so on. but not the SUB-PARENT_2,SUB-PARENT_1 and so on.
      let switchObjectState = false;

      for (const key in obj=element) {
         //if the given value matched with the object then "switchObjectState" will turn true which enables the next value on the object to be evaluated and can be passed to store.
         if(obj[key] === onState[1]){
            switchObjectState = true;
         }
         //check if the  "switchObjectState" is true or not then obj[key] is equal to null or not
         if(switchObjectState && obj[key] != null){
            //function passing the store(array) and value to the store
            pushArray(wordStore,obj[key])
         }
      }
   }


});

function pushArray(store,data){
   //check if the given value is already present in the store or not
   let findWord = store.find(element=>element===data)

   //if the store doesn't have this value then its will not push it to the store
   if(!findWord){
      store.push(data);
   }
}

//store 
console.log(wordStore,wordStore.length);

console.timeEnd('start')