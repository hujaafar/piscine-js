// Function to find the index of the first occurrence of a value
function indexOf(array, value, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = Math.max(array.length + fromIndex, 0); // Handle negative fromIndex
    }
    
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    
    return -1; // Value not found
}

// Function to find the index of the last occurrence of a value
function lastIndexOf(array, value, fromIndex = array.length - 1) {
    if (fromIndex >= array.length) {
        fromIndex = array.length - 1; // Handle out of range fromIndex
    }
    
    if (fromIndex < 0) {
        fromIndex = Math.max(array.length + fromIndex, 0); // Handle negative fromIndex
    }
    
    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === value) {
            return i;
        }
    }
    
    return -1; // Value not found
}

// Function to check if a value exists in the array
function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    
    return false; // Value not found
}


