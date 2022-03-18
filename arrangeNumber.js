let st = "9,13,21,23,31,23,12,10,22,23,21,18,11,28,17,14,24,39,23,20,22,25,19,7,10,20,22,29,37,19,27,7,5,18,13,15,16,12,21,15,16,33,22,9,20,8,36,24,17,30,17,14,25,26,26,21,32,16,6,28,11,24,34,18";

let temp = st.replace(/ /g, '');

let temp1 = temp.split(',');

let temp2 = temp1.map((x) => {
   return parseInt(x);
}).sort((x, y) => x - y);


console.log(temp2);
console.log(temp2.length);