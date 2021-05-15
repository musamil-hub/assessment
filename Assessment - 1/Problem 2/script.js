
// Create a function that receives an array of numbers and returns an array containing only the negative numbers

function getNegatives(numbersArray) {
    //TODO::
    const num = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < 0) {
            num.push(numbersArray[i]);
        }
    }
    console.log(num);
}
getNegatives([1, -3, -5, 10, 20, -30, -40]);


