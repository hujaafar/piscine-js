function multiply(a, b) {
    // Handle zero cases
    if (a === 0 || b === 0) return 0;

    // Handle negative values
    const isNegative = (a < 0) !== (b < 0);
    a = Math.abs(a);
    b = Math.abs(b);

    let result = 0;

    // Add `a` to itself `b` times
    while (b > 0) {
        if (b % 2 === 1) { // If b is odd, add the current a to result
            result += a;
        }
        a += a; // Double the value of a
        b = Math.floor(b / 2); // Halve the value of b
    }

    // Return result with correct sign
    return isNegative ? -result : result;
}

// Function to divide two numbers without using the / operator
function divide(a, b) {
    // Handle division by zero
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    // Handle negative values
    const isNegative = (a < 0) !== (b < 0);
    a = Math.abs(a);
    b = Math.abs(b);

    let quotient = 0;

    // Subtract `b` from `a` until `a` is less than `b`
    while (a >= b) {
        a -= b;
        quotient++;
    }

    // Return result with correct sign
    return isNegative ? -quotient : quotient;
}

// Function to find the modulo of two numbers without using the % operator
function modulo(a, b) {
    // Handle division by zero
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    // Find the quotient
    const quotient = divide(a, b);

    // Calculate the remainder
    const remainder = a - multiply(quotient, b);

    return remainder;
}

