// 6. Calculate the sum of numbers in an array of numbers
    function sumArray(ar)
    {
      var num=0;
        for(let i = 0; i < ar.length; i++)
        {
          num+=ar[i];
        }
        return num;
    }
var ar = [2, 3, -1, 5];
var sum = sumArray(ar);
console.log(sum);