
// 3.  Create a function that receives an array of numbers and returns an array containing only the positive numbers (Must use Array.filter)

function getPositives(numbersArray) {
    let pos_nums;
    pos_nums = numbersArray.filter((e) => e > 0);
    return pos_nums;
 }
let output=getPositives([1,-3,-5,10,20,-30,-40]);
console.log(...output);




// function getPositives(numbersArray) {
//     // const num = [];
//     for (let i = 0; i < numbersArray.length; i++) {
//         if (numbersArray[i] >= 0) {
//             let num = num.push(numbersArray[i]);
//         }
//     }
//  }
//  let val = [1,-3,-5,10,20,-30,-40];
// let output = val.filter(getPositives);
// console.log(output);

