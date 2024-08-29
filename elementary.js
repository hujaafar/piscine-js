// Function to multiply two numbers without using the * operator
function multiply(a, b) {
    let result = 0;
    let positive = Math.abs(b);
    
    for (let i = 0; i < positive; i++) {
        result += a;
    }
    
    // If b is negative, change the sign of the result
    return b < 0 ? -result : result;
}

// Function to divide two numbers without using the / operator
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    
    let result = 0;
    let dividend = Math.abs(a);
    let divisor = Math.abs(b);
    
    while (dividend >= divisor) {
        dividend -= divisor;
        result++;
    }
    
    // Determine the sign of the result
    if ((a < 0) !== (b < 0)) {
        result = -result;
    }
    
    return result;
}

// Function to get the modulo of two numbers without using the % operator
function modulo(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    
    let dividend = Math.abs(a);
    let divisor = Math.abs(b);
    
    while (dividend >= divisor) {
        dividend -= divisor;
    }
    
    // Determine the sign of the result based on the divisor
    if (a < 0) {
        dividend = -dividend;
    }
    
    return dividend;
}