function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return true;
    }
}
let intnum = prompt("Enter a Number:");

let check = parseInt(intnum);

if (isPrime(check)) {
    console.log(check + " This is not a prime number.");
} else {
    console.log(check + " This is a prime number.");
}