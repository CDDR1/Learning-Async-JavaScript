// JavaScript is a SINGLE THREADED language
console.log(1); // Statement 1
console.log(2); // Statement 2
console.log(3); // Statement 3

// Each statement is executed once at a time. Statement 2 won't execute until the first statement has finished executing, and the same happens with statement 3 with respect to the second statement. 

// Async code basically allow us to "start something now & finish it later". It's purpose is to avoid the effects of blocking code.

// Example of Async JS code:
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('simulation of a blocking code process');
}, 3000);

console.log(3);
console.log(4);
