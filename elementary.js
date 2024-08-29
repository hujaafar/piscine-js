function multiply(a, b) {
    let result = 0;
    let positiveB = Math.abs(b);

    for (let i = 0; i < positiveB; i++) {
        result += a;
    }

    // If b is negative, negate the result
    if (b < 0) {
        result = -result;
    }

    return result;
}

// Function to perform integer division without using the '/' operator
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    let result = 0;
    let absA = Math.abs(a);
    let absB = Math.abs(b);

    while (absA >= absB) {
        absA -= absB;
        result++;
    }

    // Handle sign of the result
    if ((a < 0) !== (b < 0)) {
        result = -result;
    }

    return result;
}

// Function to perform modulo operation without using the '%' operator
function modulo(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    // Use divide to find the quotient
    let quotient = divide(a, b);
    // Multiply the quotient by b and subtract from a to get the remainder
    let remainder = a - multiply(quotient, b);

    // Ensure remainder has the same sign as b
    if (remainder < 0 && b > 0 || remainder > 0 && b < 0) {
        remainder += Math.abs(b);
    }

    return remainder;
}