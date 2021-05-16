
// Create a function that will return a Boolean specifying if a number is prime
// 5(1)
function isPrime(n) {
    if (n % 2 === 0) {
        console.log(`isPrime(${n}) : True`);
    } else if (n > 1) {
        console.log(`isPrime(${n}) : False`);
    }
}
isPrime(2);
isPrime(10);
isPrime(9);
