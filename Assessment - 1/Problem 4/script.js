
//4. Create a function that will find the nth Fibonacci number using recursion

function findFibonacci(n) {
    //TODO: write code
    if (n <= 1) {
        return n;
    }
    //recursion
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(10);

console.log(n);