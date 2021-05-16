// 10. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
    function getDistinctElements(ar)
    {
        let ne;
        ne = [...new Set(ar)];
        console.log(...ne);
    
    }
    var num = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
    getDistinctElements(num);


    // Ex: getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
    // Result: [1,2,3,6,-1,9,7,10,100]

