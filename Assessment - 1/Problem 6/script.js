// 6. Calculate the sum of numbers in an array of numbers
    function sumArray(ar)
    {
      var a=0;
        for(var i in ar)
        {
          a+=ar[i];
        }
        return a;
    }
var ar = [2, 3, -1, 5];
var sum = sumArray(ar);
console.log(sum);