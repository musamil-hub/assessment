// 9. Create a function that will merge two arrays and return the result as a new array

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
mergeArrays(arr1, arr2);
 
function mergeArrays(arr1, arr2) {
    var mergeArr=arr1.concat(arr2);
    console.log(mergeArr);
}


// Result mergeArr = [1,2,3,4,5,6];
