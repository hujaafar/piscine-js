/**
 * Slices a string or an array from the starting index to the optional ending index.
 * 
 * @param {string|Array} input - The string or array to slice.
 * @param {number} start - The starting index to slice from.
 * @param {number} [end] - The optional ending index to slice up to.
 * @returns {string|Array} - The sliced portion of the input.
 */
function slice(input, start, end) {
    // Ensure start and end are integers
    start = Math.floor(start);
    end = end !== undefined ? Math.floor(end) : input.length;

    // Handle negative indices
    if (start < 0) {
        start = Math.max(input.length + start, 0);
    }
    if (end < 0) {
        end = Math.max(input.length + end, 0);
    }

    // Ensure indices are within bounds
    start = Math.min(Math.max(start, 0), input.length);
    end = Math.min(Math.max(end, 0), input.length);

    // Handle the slicing
    if (Array.isArray(input)) {
        // For arrays
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(input[i]);
        }
        return result;
    } else if (typeof input === 'string') {
        // For strings
        return input.substring(start, end);
    } else {
        throw new TypeError('Input must be a string or an array');
    }
}


