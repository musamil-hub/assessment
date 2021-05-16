
//1. Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(numbersArray) {
    //TODO::
    const num = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] >= 0) {
            num.push(numbersArray[i]);
        }
    }
    // console.log(num);
}
var re = getPositives([1, -3, -5, 10, 20, -30, -40]);


console.log(re);