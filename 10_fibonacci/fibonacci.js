const fibonacci = function(n) {
if (n < 0) return "OOPS";
let a = 0;
let b = 1;
for ( let i = 1; i < n; i++) {
    const temp = b;
    b = a + b;
    a = temp;
}
return b;
};

console.log(fibonacci(3));

// Do not edit below this line
module.exports = fibonacci;
